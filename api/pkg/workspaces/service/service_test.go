package service

import (
	"context"
	"testing"

	"getsturdy.com/api/pkg/analytics/disabled"
	service_analytics "getsturdy.com/api/pkg/analytics/service"
	"getsturdy.com/api/pkg/codebases"
	db_codebases "getsturdy.com/api/pkg/codebases/db"
	"getsturdy.com/api/pkg/events"
	"getsturdy.com/api/pkg/internal/inmemory"
	"getsturdy.com/api/pkg/snapshots/snapshotter"
	db_suggestions "getsturdy.com/api/pkg/suggestions/db"
	db_views "getsturdy.com/api/pkg/view/db"
	db_workspaces "getsturdy.com/api/pkg/workspaces/db"
	"getsturdy.com/api/vcs"
	"getsturdy.com/api/vcs/executor"
	"getsturdy.com/api/vcs/provider"
	"getsturdy.com/api/vcs/testutil"

	"github.com/stretchr/testify/assert"
	"go.uber.org/zap"
)

type testCollaborators struct {
	service      *Service
	repoProvider provider.RepoProvider
}

func setup(t *testing.T) *testCollaborators {
	logger, _ := zap.NewDevelopment()
	repoProvider := testutil.TestingRepoProvider(t)
	executorProvider := executor.NewProvider(logger, repoProvider)
	workspaceRepo := db_workspaces.NewMemory()
	analyticsService := service_analytics.New(zap.NewNop(), disabled.NewClient(logger))
	snapshotRepo := inmemory.NewInMemorySnapshotRepo()
	viewRepo := db_views.NewInMemoryViewRepo()
	viewEvents := events.NewInMemory(logger)
	codebaseUserRepo := db_codebases.NewInMemoryCodebaseUserRepo()
	eventsSender := events.NewSender(codebaseUserRepo, workspaceRepo, nil, viewEvents)
	suggestionsRepo := db_suggestions.NewMemory()
	gitSnapshotter := snapshotter.NewGitSnapshotter(snapshotRepo, workspaceRepo, workspaceRepo, viewRepo, suggestionsRepo, eventsSender, nil, executorProvider, logger, analyticsService)

	service := New(
		logger,
		analyticsService,

		workspaceRepo,
		workspaceRepo,

		nil, // changeService
		nil, // viewservice
		nil, // usersService

		executorProvider,
		eventsSender,
		nil, // eventv v2
		gitSnapshotter,
	)

	return &testCollaborators{
		service,
		repoProvider,
	}
}

func (c *testCollaborators) createCodebase(t *testing.T, id codebases.ID) vcs.RepoGitWriter {
	repoPath := c.repoProvider.TrunkPath(id)
	repo, err := vcs.CreateBareRepoWithRootCommit(repoPath)
	assert.NoError(t, err)
	return repo
}

func TestCreateNewWorkspace(t *testing.T) {
	c := setup(t)

	request := CreateWorkspaceRequest{
		UserID:     "user-id",
		CodebaseID: "codebase-id",
	}

	c.createCodebase(t, request.CodebaseID)

	ws, err := c.service.Create(context.TODO(), request)
	assert.NoError(t, err)

	assert.Equal(t, ws.UserID, request.UserID)
	assert.Equal(t, ws.CodebaseID, request.CodebaseID)
	assert.Equal(t, *ws.Name, "Untitled draft")
}

func TestCreateNewWorkspaceWithExplicitName(t *testing.T) {
	c := setup(t)

	request := CreateWorkspaceRequest{
		UserID:     "user-id",
		CodebaseID: "codebase-id",
		Name:       "My New Workspace",
	}

	c.createCodebase(t, request.CodebaseID)

	ws, err := c.service.Create(context.TODO(), request)
	assert.NoError(t, err)

	assert.Equal(t, ws.UserID, request.UserID)
	assert.Equal(t, ws.CodebaseID, request.CodebaseID)
	assert.Equal(t, *ws.Name, request.Name)
}

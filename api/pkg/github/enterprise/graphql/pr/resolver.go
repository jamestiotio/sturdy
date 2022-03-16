package pr

import (
	"context"
	"fmt"

	"getsturdy.com/api/pkg/github"
	gqlerrors "getsturdy.com/api/pkg/graphql/errors"
	"getsturdy.com/api/pkg/graphql/resolvers"

	"github.com/graph-gophers/graphql-go"
)

type prResolver struct {
	root *prRootResolver
	pr   *github.PullRequest
}

func (r *prResolver) PullRequestNumber() int32 {
	return int32(r.pr.GitHubPRNumber)
}

func (r *prResolver) Open() bool {
	return r.pr.State == github.PullRequestStateOpen
}

func (r *prResolver) Merged() bool {
	return r.pr.State == github.PullRequestStateMerged
}

func (r *prResolver) State() (resolvers.GitHubPullRequestState, error) {
	switch r.pr.State {
	case github.PullRequestStateOpen:
		return resolvers.GitHubPullRequestStateOpen, nil
	case github.PullRequestStateClosed:
		return resolvers.GitHubPullRequestStateClosed, nil
	case github.PullRequestStateMerged:
		return resolvers.GitHubPullRequestStateMerged, nil
	case github.PullRequestStateMerging:
		return resolvers.GitHubPullRequestStateMerging, nil
	default:
		return "", fmt.Errorf("unknown status: %s", r.pr.State)
	}
}

func (r *prResolver) MergedAt() *int32 {
	if r.pr.MergedAt == nil {
		return nil
	}
	ts := int32(r.pr.MergedAt.Unix())
	return &ts
}

func (r *prResolver) Base() string {
	return r.pr.Base
}

func (r *prResolver) Workspace(ctx context.Context) (resolvers.WorkspaceResolver, error) {
	return (*r.root.workspaceResolver).Workspace(ctx, resolvers.WorkspaceArgs{ID: graphql.ID(r.pr.WorkspaceID)})
}

func (r *prResolver) ID() graphql.ID {
	return graphql.ID(r.pr.ID)
}

func (r *prResolver) Statuses(ctx context.Context) ([]resolvers.StatusResolver, error) {
	if r.pr.HeadSHA == nil {
		return nil, nil
	}

	ws, err := r.root.workspaceReader.Get(r.pr.WorkspaceID)
	if err != nil {
		return nil, gqlerrors.Error(err)
	}

	return (*r.root.statusesRootResolver).InteralStatusesByCodebaseIDAndCommitID(ctx, ws.CodebaseID, *r.pr.HeadSHA)
}

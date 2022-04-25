package providers

import (
	"context"
)

type Provider interface {
	ProviderName() ProviderName
	ProviderType() ProviderType
}

type BuildProvider interface {
	Provider
	CreateBuild(ctx context.Context, codebaseID, ciCommitId, title string) (*Build, error)
}

type PushPullProvider interface {
	Provider
	Push(ctx context.Context, codebaseID string) error
	Pull(ctx context.Context, codebaseID string) error
}

type ProviderType string

const (
	ProviderTypeUndefined ProviderType = ""
	ProviderTypeBuild     ProviderType = "build"
)

type ProviderName string

const (
	ProviderNameUndefined ProviderName = ""
	ProviderNameBuildkite ProviderName = "buildkite"
)

type Build struct {
	Name        string
	Description *string
	URL         string
}

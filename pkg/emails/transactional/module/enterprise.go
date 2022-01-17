//go:build enterprise || cloud
// +build enterprise cloud

package module

import (
	"mash/pkg/di"
	"mash/pkg/emails/transactional"
	"mash/pkg/emails/transactional/enterprise"
)

func Module(c *di.Container) {
	c.Register(transactional.New)
	c.Register(enterprise.New, new(transactional.EmailSender))
}

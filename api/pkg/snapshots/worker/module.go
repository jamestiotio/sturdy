package worker

import (
	"getsturdy.com/api/pkg/di"
	"getsturdy.com/api/pkg/logger"
	queue "getsturdy.com/api/pkg/queue/module"
	service_snapshots "getsturdy.com/api/pkg/snapshots/service"
)

func Module(c *di.Container) {
	c.Import(logger.Module)
	c.Import(queue.Module)
	c.Import(service_snapshots.Module)
	c.Register(New)
}

func TestModule(c *di.Container) {
	c.Register(NewSync)
}

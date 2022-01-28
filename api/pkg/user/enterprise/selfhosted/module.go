package selfhosted

import (
	"getsturdy.com/api/pkg/di"
	"getsturdy.com/api/pkg/user/enterprise/selfhosted/service"
)

func Module(c *di.Container) {
	c.Import(service.Module)
}

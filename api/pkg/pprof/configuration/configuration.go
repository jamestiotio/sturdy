package configuration

import "getsturdy.com/api/pkg/configuration/flags"

type Configuration struct {
	Addr flags.Addr `long:"addr" description:"address to listen on" default:"127.0.0.1:6060"`
}

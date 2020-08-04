import * as Reexports from './reexporter'
import { AliasedModule } from './reexporter'
import { AliasedNamespace } from './reexporter'

// module stuff:

type A = Reexports.TypeFromModule
const a = Reexports.valueFromModule
type B = AliasedModule.TypeFromModule
const b = AliasedModule.valueFromModule

// namespace stuff:
type X = Reexports.TypeFromNamespace
const x = Reexports.valueFromNamespace
type Y = AliasedNamespace.TypeFromNamespace
const y = AliasedNamespace.valueFromNamespace

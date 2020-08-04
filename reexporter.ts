// re-exporting modules:
export * as AliasedModule from './module'
export * from './module'

// re-exporting namespaces:
export { Namespace as AliasedNamespace } from './namespace'
import { Namespace } from './namespace'
export type TypeFromNamespace = Namespace.TypeFromNamespace
export const valueFromNamespace = Namespace.valueFromNamespace

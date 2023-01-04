type UnionToIntersection<T> = (T extends any ? ((arg: T) => void) : never) extends (arg: infer U) => void ? U : never

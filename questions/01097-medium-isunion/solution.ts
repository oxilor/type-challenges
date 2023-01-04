type IsUnion<T> = [T] extends [UnionToIntersection<T>] ? false : true

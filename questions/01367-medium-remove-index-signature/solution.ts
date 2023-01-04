type RemoveIndexSignature<T> = {
  [K in keyof T as InArray<[string, number, symbol], K> extends true ? never : K]: T[K]
}

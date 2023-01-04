type GetReadonlyKeys<T> = {
  [K in keyof T]-?: IsEqual<Pick<T, K>, Mutable<Pick<T, K>>> extends true ? never : K
}[keyof T]

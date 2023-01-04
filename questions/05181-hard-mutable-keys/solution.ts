type MutableKeys<T> = {
  [K in keyof T]-?: IsEqual<Pick<T, K>, Mutable<Pick<T, K>>> extends true ? K : never
}[keyof T]

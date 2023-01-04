type IsExact<T, U> =
  IsAny<T> & IsAny<U> extends never
    ? false
    : IsAny<T> extends true
      ? true
      : [T] extends [U] ? [U] extends [T] ? true : false : false

type IndexOf<T, U, A extends any[] = []> =
  T extends [infer F, ...infer R]
    ? IsExact<F, U> extends true
      ? A['length']
      : IndexOf<R, U, [...A, 0]>
    : -1

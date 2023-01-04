type IsEqual<A, B> = (<T>() => T extends A ? 1 : 0) extends (<T>() => T extends B ? 1 : 0) ? true : false

type Includes<T extends readonly any[], U> =
  T extends [first: infer F, ...rest: infer R]
    ? IsEqual<F, U> extends true
      ? true
      : Includes<R, U>
    : false

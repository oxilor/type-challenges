type Unique<T, A extends any[] = []> = T extends [infer F, ...infer R]
  ? InArray<A, F> extends true
    ? Unique<R, A>
    : Unique<R, [...A, F]>
  : A

type FlattenDepth<
  T extends any[],
  D extends number = 1,
  A extends any[] = [],
> = T extends [infer F, ...infer R]
  ? F extends any[]
    ? A['length'] extends D
      ? [F, ...FlattenDepth<R, D, A>]
      : [...FlattenDepth<F, D, [...A, 0]>, ...FlattenDepth<R, D, A>]
    : [F, ...FlattenDepth<R, D, A>]
  : []

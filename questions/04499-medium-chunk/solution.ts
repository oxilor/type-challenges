type Chunk<T, S, C extends any[] = [], A extends any[] = []> =
  T extends [infer F, ...infer R]
    ? C['length'] extends S
      ? Chunk<R, S, [F], [...A, C]>
      : Chunk<R, S, [...C, F], A>
    : C['length'] extends 0
      ? A
      : [...A, C]

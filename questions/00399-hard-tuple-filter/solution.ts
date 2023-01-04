type FilterOut<A extends any[], U, T extends any[] = []> =
  A extends [infer F, ...infer R]
    ? [F] extends [U]
        ? FilterOut<R, U, T>
        : FilterOut<R, U, [...T, F]>
    : T

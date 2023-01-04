type DeleteNumber<T, U, A extends any[] = []> = T extends [infer F, ...infer R]
  ? F extends U
    ? [...A, ...R]
    : DeleteNumber<R, U, [...A, F]>
  : A

type MaxNumber<T extends number[], A extends any[] = []> =
  T['length'] extends 0
    ? never
    : T['length'] extends 1
      ? T[0]
      : MaxNumber<DeleteNumber<T, A['length']>, [...A, 0]>

type Maximum<T extends number[]> = MaxNumber<Unique<T>>

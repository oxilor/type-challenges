type SimpleSum<N1 extends number, N2 extends number> = [...ConstructTuple<N1>, ...ConstructTuple<N2>]['length']

type CheckSum<T extends number[], U extends number, Target extends number> =
  T extends [infer F extends number, ...infer R extends number[]]
    ? SimpleSum<U, F> extends Target
      ? true
      : CheckSum<R, U, Target>
    : false

type TwoSum<T extends number[], Target extends number> =
  T extends [infer F extends number, ...infer R extends number[]]
    ? CheckSum<R, F, Target> extends true
      ? true
      : TwoSum<R, Target>
    : false

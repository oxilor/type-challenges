enum Comparison {
  Greater,
  Equal,
  Lower,
}

type BuildTuple<N extends string, T extends any[] = []> =
  `${T['length']}` extends N
    ? T
    : BuildTuple<N, [...T, 0]>

type FirstIsGreaterThanSecond<A extends string, B extends string, T extends any[] = BuildTuple<A>> =
  `${T['length']}` extends B
    ? true
    : T['length'] extends 0
      ? false
      : FirstIsGreaterThanSecond<A, B, Pop<T>>

type CompareNumsWithSameSign<A extends string, B extends string, IsPositive extends boolean> =
  FirstIsGreaterThanSecond<A, B> & IsPositive extends never
    ? Comparison.Lower
    : Comparison.Greater

type Comparator<A extends number, B extends number> =
  `${A}` extends `${B}`
    ? Comparison.Equal
    : `${A}` extends `${infer AF}${infer AR}`
      ? `${B}` extends `${infer BF}${infer BR}`
        ? AF extends '-'
          ? BF extends '-'
            ? CompareNumsWithSameSign<`${AR}`, `${BR}`, false>
            : Comparison.Lower
          : BF extends '-'
            ? Comparison.Greater
            : CompareNumsWithSameSign<`${A}`, `${B}`, true>
        : never
      : never

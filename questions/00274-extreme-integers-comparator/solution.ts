enum Comparison {
  Greater,
  Equal,
  Lower,
}

type BuildTuple<N extends string, T extends any[] = []> =
  `${T['length']}` extends N
    ? T
    : BuildTuple<N, [...T, 0]>

type FirstDigitIsGreaterThanSecond<A extends string, B extends string, T extends any[] = BuildTuple<A>> =
  `${T['length']}` extends B
    ? true
    : T['length'] extends 0
      ? false
      : FirstDigitIsGreaterThanSecond<A, B, Pop<T>>

type FirstIsLongerThanSecond<A extends string, B extends string> =
  FirstDigitIsGreaterThanSecond<`${GetLetters<A>['length']}`, `${GetLetters<B>['length']}`>

type FirstIsGreaterThanSecond<A extends string, B extends string> =
  A extends `${infer AF}${infer AR}`
    ? B extends `${infer BF}${infer BR}`
      ? AF extends BF
        ? FirstIsGreaterThanSecond<AR, BR>
        : FirstDigitIsGreaterThanSecond<AF, BF> extends true
          ? true
          : false
      : never
    : never

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
            ? GetLetters<AR>['length'] extends GetLetters<BR>['length']
              ? CompareNumsWithSameSign<`${AR}`, `${BR}`, false>
              : FirstIsLongerThanSecond<AR, BR> extends true
                ? Comparison.Lower
                : Comparison.Greater
            : Comparison.Lower
          : BF extends '-'
            ? Comparison.Greater
            : GetLetters<`${A}`>['length'] extends GetLetters<`${B}`>['length']
              ? CompareNumsWithSameSign<`${A}`, `${B}`, true>
              : FirstIsLongerThanSecond<`${A}`, `${B}`> extends true
                ? Comparison.Greater
                : Comparison.Lower
        : never
      : never

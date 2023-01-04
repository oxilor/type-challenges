type SumDigits<
  N1 extends string,
  N2 extends string,
  N3 extends string = '0',
> = GetLetters<`${[...BuildTuple<N1>, ...BuildTuple<N2>, ...BuildTuple<N3>]['length'] & number}`>

type RunSumStrNums<
  Sum extends string[],
  A extends string,
  B extends string,
  Res extends string,
> = Sum['length'] extends 2
  ? SumStrNums<A, B, true, `${Res}${Sum[1]}`>
  : SumStrNums<A, B, false, `${Res}${Sum[0]}`>

type SumStrNums<
  A extends string,
  B extends string,
  Flag = false,
  Res extends string = '',
> = A extends `${infer AF}${infer AR}`
  ? B extends `${infer BF}${infer BR}`
    ? RunSumStrNums<SumDigits<AF, BF, Flag extends true ? '1' : '0'>, AR, BR, Res>
    : Flag extends true
      ? RunSumStrNums<SumDigits<AF, '1'>, AR, '', Res>
      : `${Res}${A}`
  : B extends `${infer BF}${infer BR}`
    ? Flag extends true
      ? RunSumStrNums<SumDigits<BF, '1'>, '', BR, Res>
      : `${Res}${B}`
    : Flag extends true
      ? `${Res}1`
      : Res

type Sum<
  A extends string | number | bigint,
  B extends string | number | bigint,
> = ReverseString<SumStrNums<ReverseString<`${A}`>, ReverseString<`${B}`>>>

type N = Sum<10, 1>

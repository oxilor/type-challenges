type MultiplyDigits<D1 extends string, D2 extends string, A extends any[] = [], Res extends any[] = []> =
  `${A['length']}` extends D2
    ? `${Res['length']}`
    : MultiplyDigits<D1, D2, [...A, 0], [...Res, ...BuildTuple<D1>]>

type RunMultiplyNumByDigit<Sum extends string[], N extends string, D extends string, Res extends string> = Sum['length'] extends 2
  ? MultiplyNumByDigit<N, D, Sum[0], `${Res}${Sum[1]}`>
  : MultiplyNumByDigit<N, D, '0', `${Res}${Sum[0]}`>

type MultiplyNumByDigit<N extends string, D extends string, Remember extends string = '0', Res extends string = ''> =
  N extends `${infer F}${infer R}`
    ? RunMultiplyNumByDigit<GetLetters<Sum<MultiplyDigits<F, D>, Remember>>, R, D, Res>
    : Remember extends '0'
      ? Res
      : `${Res}${Remember}`

type RepeatZeros<N extends number, A extends any[] = [], Res extends string = ''> =
  A['length'] extends N
    ? Res
    : RepeatZeros<N, [...A, 0], `${Res}0`>

type TrimLeftZeros<T extends string> = T extends `0${infer U}` ? TrimLeftZeros<U> : T

type SumMultipleNumbers<Nums extends string[], S extends string = '0'> =
  Nums extends [infer U extends string, ...infer R extends string[]]
    ? SumMultipleNumbers<R, Sum<S, TrimLeftZeros<U>>>
    : S

type MultipleNums<A extends string, B extends string, ToSum extends string[] = []> =
  B extends `${infer U}${infer R}`
    ? MultipleNums<A, R, [...ToSum, `${ReverseString<MultiplyNumByDigit<A, U>>}${RepeatZeros<ToSum['length']>}`]>
    : SumMultipleNumbers<ToSum>

type Multiply<
  A extends string | number | bigint,
  B extends string | number | bigint,
> = MultipleNums<ReverseString<`${A}`>, ReverseString<`${B}`>>

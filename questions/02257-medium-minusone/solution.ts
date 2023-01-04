type StringToNumber<T extends string> = T extends `${infer N extends number}` ? N : never
type TrimRightZeros<T extends string> = T extends `${infer U}0` ? TrimRightZeros<U> : T
type Prev = [never, '0', '1', '2', '3', '4', '5', '6', '7', '8']

type Minus<T extends string, A extends string = '', Skip = false> =
  Skip extends true
    ? `${A}${T}`
    : T extends `${infer F}${infer R}`
      ? F extends '0'
        ? Minus<R, `${A}9`>
        : Minus<R, `${A}${Prev[StringToNumber<F>]}`, true>
      : A

type MinusOne<T extends number> =
  T extends 0 ? -1
    : T extends 1 ? 0
      : StringToNumber<ReverseString<TrimRightZeros<Minus<ReverseString<`${T}`>>>>>

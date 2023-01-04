type Digit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
type Sign = '+' | '-'
type Percent = '%'

type PercentageParser<
  A extends string,
  S extends string = '',
  D extends string = '',
  P extends string = '',
> = A extends `${infer U}${infer R}`
  ? U extends Sign
    ? PercentageParser<R, U>
    : U extends Digit
      ? PercentageParser<R, S, `${D}${U}`>
      : U extends Percent
        ? PercentageParser<R, S, D, U>
        : [S, D, P]
  : [S, D, P]

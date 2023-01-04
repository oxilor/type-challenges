type IsNumber<S extends string> = S extends `${infer F}${infer R}`
  ? F extends Digit
    ? IsNumber<R>
    : false
  : true

type StrToNum<S extends string, A extends any[] = []> =
  S extends `${A['length']}`
    ? A['length']
    : StrToNum<S, [...A, 0]>

type ToNumber<S extends string> = IsNumber<S> extends true ? StrToNum<S> : never

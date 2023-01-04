type StringToTuple<S extends string> = S extends `${infer F}${infer R}`
  ? [F, ...StringToTuple<R>]
  : []

type LengthOfString<S extends string> = StringToTuple<S>['length']

type CamelCaseUpper<S extends string> = S extends `${infer U}_${infer R}`
  ? `${Capitalize<Lowercase<U>>}${CamelCaseUpper<R>}`
  : Capitalize<Lowercase<S>>

type CamelCase<S extends string> = S extends `${infer U}_${infer R}`
  ? `${Lowercase<U>}${CamelCaseUpper<R>}`
  : Lowercase<S>

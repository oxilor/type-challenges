type ReverseString<S extends string, A extends string = ''> = S extends `${infer U}${infer R}`
  ? ReverseString<R, `${U}${A}`>
  : A

type EndsWith<T extends string, U extends string> = StartsWith<ReverseString<T>, ReverseString<U>>

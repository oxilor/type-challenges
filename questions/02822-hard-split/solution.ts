type SplitString<S extends string, Sep extends string, A extends string[] = []> =
  S extends `${infer U}${Sep}${infer R}`
    ? SplitString<R, Sep, [...A, U]>
    : [...A, S]

type Split<S extends string, Sep extends string> =
  string extends S
    ? string[]
    : Sep extends ''
      ? GetLetters<S>
      : SplitString<S, Sep>

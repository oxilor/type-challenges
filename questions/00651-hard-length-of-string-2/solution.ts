type GetLetters<T extends string, A extends string[] = []> =
  T extends `${infer U}${infer R}`
    ? GetLetters<R, [...A, U]>
    : A

type LengthOfString2<T extends string> = GetLetters<T>['length']

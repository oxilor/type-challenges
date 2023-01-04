type Letters<S> = S extends `${infer U}${infer R}` ? U | Letters<R> : never

type ExcludeLetters<S, T, A = ''> = S extends `${infer U}${infer R}`
  ? U extends T
    ? ExcludeLetters<R, T, A>
    : ExcludeLetters<R, T, `${A & string}${U}`>
  : A

type DropString<S, R> = ExcludeLetters<S, Letters<R>>

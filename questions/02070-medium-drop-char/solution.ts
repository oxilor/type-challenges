type DropChar<S, C, A = ''> = S extends `${infer U}${infer R}`
  ? U extends C
    ? DropChar<R, C, A>
    : DropChar<R, C, `${A & string}${U}`>
  : A

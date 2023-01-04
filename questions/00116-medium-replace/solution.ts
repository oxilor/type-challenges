type Replace<S extends string, From extends string, To extends string> = From extends ''
  ? S
  : S extends `${infer U}${From}${infer R}`
    ? `${U}${To}${R}`
    : S

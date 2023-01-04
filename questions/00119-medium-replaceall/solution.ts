type ReplaceAll<S extends string, From extends string, To extends string> = From extends ''
  ? S
  : S extends `${infer U}${From}${infer R}`
    ? `${U}${To}${ReplaceAll<R, From, To>}`
    : S

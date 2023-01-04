type Enum<
  T extends readonly any[],
  N extends boolean = false,
  A extends any[] = [],
  O = {},
> = T extends readonly [infer F, ...infer R]
  ? Enum<R, N, [...A, 0], {
    readonly [K in keyof O | F & string as Capitalize<K & string>]: K extends keyof O
      ? O[K]
      : N extends true
        ? A['length']
        : F
  }>
  : O

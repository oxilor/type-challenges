type Format<T extends string, PrevIsPercent = false> =
  T extends `${infer F}${infer R}`
    ? F extends '%'
      ? PrevIsPercent extends true
        ? Format<R>
        : Format<R, true>
      : PrevIsPercent extends true
        ? F extends 's'
          ? (s: string) => Format<R>
          : F extends 'd'
            ? (d: number) => Format<R>
            : Format<R>
        : Format<R>
    : string

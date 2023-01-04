type BTD<S extends string, T extends any[] = [0], TR extends any[] = []> =
  S extends `${infer F}${infer R}`
    ? F extends '0'
      ? BTD<R, [...T, ...T], TR>
      : F extends '1'
        ? BTD<R, [...T, ...T], [...TR, ...T]>
        : never
    : TR['length']

type BinaryToDecimal<S extends string> = BTD<ReverseString<S>>

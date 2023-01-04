type Frequencies<S extends string, T extends Record<string, number[]> = {}> =
  S extends `${infer F}${infer R}`
    ? Frequencies<R, {
      [K in keyof T | F]: K extends F
        ? K extends keyof T
          ? [...T[K], 0]
          : [0]
        : T[K & keyof T]
    }>
    : { [K in keyof T]: T[K]['length'] }

type PickFirstUnique<S extends string, Freq extends Record<string, number>, A extends number[] = []> =
    S extends `${infer F}${infer R}`
      ? F extends keyof Freq
        ? Freq[F] extends 1
          ? A['length']
          : PickFirstUnique<R, Freq, [...A, 0]>
        : -1
      : -1

type FirstUniqueCharIndex<S extends string> = PickFirstUnique<S, Frequencies<S>>

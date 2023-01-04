namespace RLE {
  type EncodeLetter<A extends string[] = []> =
    A['length'] extends 0
      ? ''
      : `${A['length'] extends 1 ? '' : `${A['length']}`}${A[0]}`

  type RepeatLetter<L extends string, N extends string, A extends any[] = [], T extends string = ''> =
      `${A['length']}` extends N
        ? T
        : RepeatLetter<L, N, [...A, 0], `${T}${L}`>

  export type Encode<S extends string, A extends string[] = [], T extends string = ''> =
    S extends `${infer F}${infer R}`
      ? A['length'] extends 0
        ? Encode<R, [F], T>
        : A[0] extends F
          ? Encode<R, [...A, F], T>
          : Encode<R, [F], `${T}${EncodeLetter<A>}`>
      : `${T}${EncodeLetter<A>}`

  export type Decode<S extends string, N extends string = '', T extends string = ''> =
    S extends `${infer F}${infer R}`
      ? F extends Digit
        ? Decode<R, `${N}${F}`, T>
        : N extends ''
          ? Decode<R, '', `${T}${F}`>
          : Decode<R, '', `${T}${RepeatLetter<F, N>}`>
      : T
}

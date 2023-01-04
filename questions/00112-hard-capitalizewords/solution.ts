type Letter = keyof UCMap | UCMap[keyof UCMap]

type CapitalizeWords<S extends string, A extends string = '', W extends string = ''> = S extends `${infer U}${infer R}`
  ? U extends Letter
    ? CapitalizeWords<R, A, `${W}${U}`>
    : CapitalizeWords<R, `${A}${Capitalize<W>}${U}`>
  : `${A}${Capitalize<W>}`

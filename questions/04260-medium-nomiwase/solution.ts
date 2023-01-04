type CombinationsWithLetter<S extends string, C extends string> =
  S extends `${infer U}${infer R}`
    ? `${C}${S}` | `${U}${C}${R}` | `${U}${CombinationsWithLetter<R, C>}`
    : never

type AllCombinations<S extends string> =
  S extends `${infer U}${infer R}`
    ? U | AllCombinations<R> | CombinationsWithLetter<AllCombinations<R>, U>
    : S

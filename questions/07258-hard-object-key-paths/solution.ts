type OwnKeyOf<T> = Exclude<keyof T, keyof any[]>

type Indexes<T> = T extends readonly any[]
  ? OwnKeyOf<T>
  : never

type ObjectKeyPaths<T extends object> = {
  [K in OwnKeyOf<T>]: T[K] extends object
    ? K
    | `${K & string}.${ObjectKeyPaths<T[K]> & string}`
    | `${K & string}${'' | '.'}[${Indexes<T[K]> & string}]`
    : K
}[OwnKeyOf<T>]

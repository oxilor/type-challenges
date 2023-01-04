type ParseKeyValue<S extends string> = S extends `${infer U}=${infer R}` ? [U, R] : [S, true]

type InArray<T, K> = T extends [infer F, ...infer R]
  ? IsEqual<F, K> extends true
    ? true
    : InArray<R, K>
  : false

type MergeKeyValue<T, KV extends [string, string | true]> = {
  [P in keyof T | KV[0]]: P extends KV[0]
    ? P extends keyof T
      ? T[P] extends true
        ? KV[1]
        : KV[1] extends true
          ? T[P]
          : T[P] extends any[]
            ? InArray<T[P], KV[1]> extends true
              ? T[P]
              : [...T[P], KV[1]]
            : T[P] extends KV[1]
              ? T[P]
              : [T[P], KV[1]]
      : KV[1]
    : T[P & keyof T]
}

type ParseQueryString<S extends string, A = {}> = Simplify<
  S extends ''
    ? A
    : S extends `${infer U}&${infer R}`
      ? ParseQueryString<R, MergeKeyValue<A, ParseKeyValue<U>>>
      : MergeKeyValue<A, ParseKeyValue<S>>
>

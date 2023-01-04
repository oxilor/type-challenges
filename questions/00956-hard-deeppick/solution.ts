type PickByPath<T, U> = U extends keyof T
  ? { [K in U]: T[K] }
  : U extends `${infer F}.${infer R}`
    ? F extends keyof T
      ? { [K in F]: PickByPath<T[K], R> }
      : never
    : never

type DeepPick<T, U> = UnionToIntersection<PickByPath<T, U>>

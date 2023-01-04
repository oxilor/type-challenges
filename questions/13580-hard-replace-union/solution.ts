type ReplaceUnit = readonly [any, any]

type UnionReplace<T, U extends [any, any][]> =
  U extends [first: infer F, ...rest: infer R]
    ? F extends [any, any]
      ? T extends F[0]
        ? F[1]
        : R extends [any, any][]
          ? UnionReplace<T, R>
          : T
      : T
    : T

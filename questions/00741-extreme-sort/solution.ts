type Insert<T extends number[], N extends number, Desc extends boolean, Skipped extends number[] = []> =
  T extends [infer F extends number, ...infer R extends number[]]
    ? GreaterThan<N, F> & Desc extends never
      ? Insert<R, N, Desc, [...Skipped, F]>
      : [...Skipped, N, ...T]
    : [...Skipped, N]

type Sort<T extends number[], Desc extends boolean = false, Res extends number[] = []> =
  T extends [infer F extends number, ...infer R extends number[]]
    ? Sort<R, Desc, Insert<Res, F, Desc>>
    : Res

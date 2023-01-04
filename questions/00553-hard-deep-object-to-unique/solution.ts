type DeepObjectToUniq<O extends object, S = []> = {
  [K in keyof O]: O[K] extends object
    ? DeepObjectToUniq<O[K], [O, K]>
    : O[K]
} & { [s: symbol]: S }

type UnionToTuple<T> = UnionToIntersection<T extends any ? () => T : never> extends () => infer R
  ? [...UnionToTuple<Exclude<T, R>>, R]
  : []

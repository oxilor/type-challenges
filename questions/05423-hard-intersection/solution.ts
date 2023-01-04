type Intersection<T> =
  T extends [first: infer F, ...rest: infer R]
    ? F extends any[]
      ? F[number] & Intersection<R>
      : F & Intersection<R>
    : unknown

type All<T, E> = T extends [first: infer F, ...rest: infer R]
  ? [E] extends [F]
      ? All<R, E>
      : false
  : true

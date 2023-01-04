type IsRequiredKey<T, K extends keyof T> =
  [K] extends [RequiredKeys<T>]
    ? true
    : false

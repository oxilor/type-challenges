type Camelize<T> = T extends any[]
  ? T extends [first: infer F, ...rest: infer R]
    ? [Camelize<F>, ...Camelize<R>]
    : T
  : T extends object
    ? { [K in keyof T as CamelCase<K & string>]: Camelize<T[K]> }
    : T

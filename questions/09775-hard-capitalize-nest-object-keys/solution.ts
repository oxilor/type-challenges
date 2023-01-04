type TransformArray<T extends any[]> =
  T extends [infer F, ...infer R]
    ? F extends Function
      ? [F, ...TransformArray<R>]
      : F extends any[]
        ? [TransformArray<F>, ...TransformArray<R>]
        : F extends object
          ? [CapitalizeNestObjectKeys<F>, ...TransformArray<R>]
          : [F, ...TransformArray<R>]
    : []

type CapitalizeNestObjectKeys<T extends object> = {
  [K in OwnKeyOf<T> as Capitalize<K & string>]: T[K] extends Function
    ? T[K]
    : T[K] extends any[]
      ? TransformArray<T[K]>
      : T[K] extends object
        ? CapitalizeNestObjectKeys<T[K]>
        : T[K]
}

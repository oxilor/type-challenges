type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends () => void
    ? T[K]
    : T[K] extends object
      ? DeepReadonly<T[K]>
      : T[K];
}

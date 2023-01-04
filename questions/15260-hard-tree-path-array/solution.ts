type Path<T extends object, A extends any[] = []> = {
  [K in OwnKeyOf<T>]: T[K] extends object
    ? [...A, K] | Path<T[K], [...A, K]>
    : [...A, K]
}[OwnKeyOf<T>]

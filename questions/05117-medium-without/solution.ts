type ToArray<T> = T extends any[] ? T : [T]

type FilterElements<T, U> = T extends [first: infer F, ...rest: infer R]
  ? InArray<U, F> extends true
    ? FilterElements<R, U>
    : [F, ...FilterElements<R, U>]
  : []

type Without<T, U> = FilterElements<T, ToArray<U>>

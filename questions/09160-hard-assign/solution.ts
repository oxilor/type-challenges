type IsObject<T> = T extends Function
  ? false
  : T extends any[]
    ? false
    : T extends object
      ? true
      : false

type Assign<T extends Record<string, unknown>, U> =
  U extends [infer F, ...infer R]
    ? IsObject<F> extends true
      ? Assign<{ [K in keyof T | keyof F]: K extends keyof F ? F[K] : T[K & keyof T] }, R>
      : Assign<T, R>
    : T

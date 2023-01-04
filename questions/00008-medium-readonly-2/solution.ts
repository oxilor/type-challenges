type Simplify<T> = { [K in keyof T]: T[K] }

type MyReadonly2<T, K extends keyof T = keyof T> = Simplify<{
  [P in keyof T as P extends K ? never : P]: T[P]
} & {
  readonly [P in keyof T as P extends K ? P : never]: T[P]
}>

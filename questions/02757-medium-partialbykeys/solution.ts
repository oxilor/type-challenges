type PartialByKeys<T, K extends keyof T = keyof T> = Simplify<{
  [P in keyof T as P extends K ? never : P]: T[P]
} & {
  [P in K]?: T[P]
}>

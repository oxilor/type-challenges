type RequiredByKeys<T, K extends keyof T = keyof T> = Simplify<{
  [P in keyof T as T extends K ? never : P]: T[P]
} & {
  [P in K]-?: T[P]
}>

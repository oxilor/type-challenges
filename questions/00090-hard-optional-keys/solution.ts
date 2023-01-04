type OptionalKeys<T> = {
  [K in keyof T]-?: T extends { [P in K]-?: T[P] } ? never : K
}[keyof T]

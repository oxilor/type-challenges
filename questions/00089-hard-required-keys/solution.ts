type RequiredKeys<T> = {
  [K in keyof T]-?: T extends { [P in K]-?: T[P] } ? K : never
}[keyof T]

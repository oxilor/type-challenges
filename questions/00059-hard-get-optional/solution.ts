type GetOptional<T> = {
  [P in keyof T as T extends { [I in P]-?: T[I] } ? never : P]: T[P]
}

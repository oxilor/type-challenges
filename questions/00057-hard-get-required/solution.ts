type GetRequired<T> = {
  [P in keyof T as T extends { [I in P]-?: T[I] } ? P : never]: T[P]
}

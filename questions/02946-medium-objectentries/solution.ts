type ObjectRequred<T> = {
  [K in keyof T]-?: T[K]
}

type Entries<T> = {
  [K in keyof T]: [K, T[K] extends never ? undefined : T[K]]
}[keyof T]

type ObjectEntries<T> = Entries<ObjectRequred<T>>

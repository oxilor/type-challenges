type Chainable<T = {}> = {
  option<K extends string, V>(
    key: K extends keyof T ? never : K,
    value: V
  ): Chainable<{ [P in keyof T | K]: P extends K ? V : T[P & keyof T] }>
  get(): T
}

type AppendToObject<T, U, V> = Simplify<T & {
  [K in U & string]: V
}>

type TupleToObject<T extends readonly (string | number)[]> = {
  [K in T[number]]: K
}

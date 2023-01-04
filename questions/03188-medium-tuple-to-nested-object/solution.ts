type TupleToNestedObject<T, U> =
  T extends [first: infer F, ...rest: infer R]
    ? { [K in F & string]: TupleToNestedObject<R, U> }
    : U

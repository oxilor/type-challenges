type LookUp<U, T> = U extends { type: infer X }
  ? T extends Uncapitalize<X & string>
    ? U
    : never
  : never

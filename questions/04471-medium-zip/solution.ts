type Zip<T, U> =
  T extends [first: infer TF, ...rest: infer TR]
    ? U extends [first: infer UF, ...rest: infer UR]
      ? [[TF, UF], ...Zip<TR, UR>]
      : []
    : []

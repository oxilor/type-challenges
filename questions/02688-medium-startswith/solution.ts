type StartsWith<T extends string, U extends string> =
  T extends `${infer TU}${infer TR}`
    ? U extends `${infer UU}${infer UR}`
      ? TU extends UU
        ? StartsWith<TR, UR>
        : false
      : true
    : U extends ''
      ? true
      : false

type FlipArguments<T extends (...args: any[]) => any> =
  T extends (...args: infer U) => infer R
    ? (...args: Reverse<U>) => R
    : T

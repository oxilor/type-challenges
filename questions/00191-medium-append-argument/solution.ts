type AppendArgument<Fn extends (...args: any[]) => any, A> =
  Fn extends (...args: infer U) => infer R
    ? (...args: [...U, A]) => R
    : never

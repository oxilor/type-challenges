type LastIndexOf<T extends any[], U, A extends any[] = Pop<T>> =
  T extends [...infer R, infer L]
    ? IsExact<L, U> extends true
      ? A['length']
      : LastIndexOf<R, U, Pop<A>>
    : -1

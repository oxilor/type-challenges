type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  IsFilling = false,
  A extends unknown[] = [],
> = Start extends End
  ? T extends [infer F, ...infer R]
    ? Fill<R, N, Start, End, false, [...A, F]>
    : A
  : IsFilling extends false
    ? A['length'] extends Start
      ? Fill<T, N, Start, End, true, A>
      : T extends [infer F, ...infer R]
        ? Fill<R, N, Start, End, IsFilling, [...A, F]>
        : A
    : A['length'] extends End
      ? Fill<T, N, Start, End, false, A>
      : T extends [any, ...infer R]
        ? Fill<R, N, Start, End, IsFilling, [...A, N]>
        : A

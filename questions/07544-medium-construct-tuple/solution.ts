type ConstructTuple<L extends number, A extends unknown[] = []> =
  A['length'] extends L
    ? A
    : ConstructTuple<L, [...A, unknown]>

type NumberRange<L extends number, H extends number, A extends any[] = ConstructTuple<L>, R = never> =
  A['length'] extends H ? R | A['length'] : NumberRange<L, H, [...A, unknown], R | A['length']>

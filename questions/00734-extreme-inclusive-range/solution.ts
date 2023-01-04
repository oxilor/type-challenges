type LowerGreaterThanHigher<A extends any[], Higher extends number> =
  A['length'] extends Higher
    ? true
    : A['length'] extends 0
      ? false
      : LowerGreaterThanHigher<Pop<A>, Higher>

type MakeRange<A extends any[], Higher extends number, R extends any[] = []> =
  A['length'] extends Higher
    ? [...R, A['length']]
    : MakeRange<[...A, unknown], Higher, [...R, A['length']]>

type InclusiveRange<
  Lower extends number,
  Higher extends number,
  A extends any[] = ConstructTuple<Lower>,
> = LowerGreaterThanHigher<Pop<A>, Higher> extends true
  ? []
  : MakeRange<A, Higher>

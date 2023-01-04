type Subtract<
  M extends number,
  S extends number,
  A extends any[] = ConstructTuple<M>,
  B extends any[] = [],
> = B['length'] extends S
  ? A['length']
  : A['length'] extends 0
    ? never
    : Subtract<M, S, Pop<A>, [...B, 0]>

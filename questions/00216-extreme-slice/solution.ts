type SliceWithPositiveBounds<
  Arr extends number[],
  Start extends number,
  End extends number,
  A extends any[] = [],
  Res extends number[] = [],
> = Arr extends [infer F extends number, ...infer R extends number[]]
  ? A['length'] extends End
    ? Res
    : (A['length'] extends Start ? true : false) & (Res['length'] extends 0 ? false : true) extends never
        ? SliceWithPositiveBounds<R, Start, End, [...A, 0], [...Res, F]>
        : SliceWithPositiveBounds<R, Start, End, [...A, 0], Res>
  : Res

type IsNegative<N extends number> = `${N}` extends `${infer F}${string}`
  ? F extends '-'
    ? true
    : false
  : false

type ToPositive<
  N extends number,
  Arr extends number[],
  A extends any[] = [],
> = IsNegative<N> extends true
  ? `${N}` extends `-${A['length']}`
    ? Arr['length']
    : Arr['length'] extends 0
      ? 0
      : ToPositive<N, Pop<Arr>, [...A, 0]>
  : N

type Slice<
  Arr extends number[],
  Start extends number = 0,
  End extends number = Arr['length'],
> = SliceWithPositiveBounds<Arr, ToPositive<Start, Arr>, ToPositive<End, Arr>>

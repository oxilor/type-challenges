type Currying<Args extends any[], R, PrevArgs extends any[] = []> = Args extends [infer AF, ...infer AR]
  ? ((...args: [...PrevArgs, AF]) => Currying<AR, R>) & Currying<AR, R, [...PrevArgs, AF]>
  : PrevArgs['length'] extends 0
    ? R
    : (...args: PrevArgs) => R

// declare function DynamicParamsCurrying<T>(fn: T): T extends (...args: infer A) => infer R ? Currying<A, R> : never
declare function DynamicParamsCurrying<A extends any[], R>(fn: (...args: A) => R): Currying<A, R>

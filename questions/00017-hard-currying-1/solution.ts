type Curried<T> = T extends ((...args: infer A) => infer R)
  ? A extends []
    ? () => R
    : A extends [first: infer F, ...rest: infer M]
      ? (arg: F) => M extends [] ? R : Curried<(...args: M) => R>
      : never
  : never

declare function Currying<T>(fn: T): Curried<T>

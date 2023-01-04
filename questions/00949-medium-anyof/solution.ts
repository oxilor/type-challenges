type FalseValue = false | 0 | '' | null | undefined | []
type IsFalsy<T> = T extends FalseValue
  ? true
  : T extends object
    ? keyof T extends never
      ? true
      : false
    : false

type AnyOf<T extends readonly any[]> =
  T extends [first: infer U, ...rest: infer R]
    ? IsFalsy<U> extends true
      ? AnyOf<R>
      : true
    : false

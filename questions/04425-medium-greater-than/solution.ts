type GoToZero<T extends number, U extends number, A extends any[] = ConstructTuple<T>> =
  A['length'] extends U
    ? true
    : A['length'] extends 0
      ? false
      : GoToZero<T, U, Pop<A>>

type GreaterThan<T extends number, U extends number> = T extends U ? false : GoToZero<T, U>

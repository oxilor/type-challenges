type CalculateFibonacci<
  T extends number,
  A extends number[] = [0],
  B extends number[] = [0],
  R extends number[] = [0, 0],
> = T extends R['length']
  ? B['length']
  : CalculateFibonacci<T, B, [...A, ...B], [...R, 0]>

type Fibonacci<T extends number> = T extends 1 ? 1 : CalculateFibonacci<T>

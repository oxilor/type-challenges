type Reverse<T extends any[], A extends any[] = []> =
  T extends [first: infer F, ...rest: infer R]
    ? Reverse<R, [F, ...A]>
    : A

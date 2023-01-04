type MakePermutation<T1, T2> = T1 extends any
  ? Exclude<T2, T1> extends never
    ? [T1]
    : [T1, ...MakePermutation<Exclude<T2, T1>, Exclude<T2, T1>>]
  : []

type Permutation<T> = [T] extends [never] ? [] : MakePermutation<T, T>

// ['a', 'b'] => 'a b'
type JoinElements<T extends string[]> =
  T extends [infer F extends string, ...infer R extends string[]]
    ? R['length'] extends 0
      ? F
      : `${F} ${JoinElements<R>}`
    : never

// ['a'], 'b' => ['b', 'a'] | ['a', 'b']
type CombinateBySequence<Seq extends string[], E extends string, Left extends string[] = []> =
  [...Left, E, ...Seq] | (
    Seq extends [infer F extends string, ...infer R extends string[]]
      ? CombinateBySequence<R, E, [...Left, F]>
      : never
  )

// [['a'], ['b']], 'c' => ['c', 'a'] | ['a', 'c'] | ['c', 'b'] | ['b', 'c']
type CombinateBySequences<Seqs extends string[][], E extends string> =
  Seqs extends [infer F extends string[], ...infer R extends string[][]]
    ? CombinateBySequence<F, E> | CombinateBySequences<R, E>
    : [E]

type CombinationUnion<Seq extends string[], Seqs extends string[][], R extends string[]> =
  Seq | MakeCombination<R, [...Seqs, Seq]>

type MakeCombination<T extends string[], Seqs extends string[][] = []> =
    T extends [infer F extends string, ...infer R extends string[]]
      ? CombinationUnion<CombinateBySequences<Seqs, F>, Seqs, R>
      : never

type Combination<T extends string[]> = JoinElements<MakeCombination<T>>

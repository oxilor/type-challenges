type ObjectFromEntries<T> = Simplify<
  UnionToIntersection<
    T extends [infer K, infer V]
      ? { [P in K & string]: V }
      : {}
  >
>

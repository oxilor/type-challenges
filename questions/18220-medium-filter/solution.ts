type Filter<T extends any[], P> = T extends [first: infer F, ...rest: infer R]
  ? [F] extends [P]
      ? [F, ...Filter<R, P>]
      : Filter<R, P>
  : []

type JoinFromSecond<P, D, S extends string = ''> =
  P extends [infer F, ...infer R]
    ? JoinFromSecond<R, D, `${S}${D & string}${F & string}`>
    : S

type JoinRes<P, D> =
  P extends [infer F, ...infer R]
    ? `${F & string}${JoinFromSecond<R, D>}`
    : ''

declare function join<D extends string>(delimiter: D): <P extends string[]>(...parts: P) => JoinRes<P, D>

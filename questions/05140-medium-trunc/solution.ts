type StrTrunc<T extends string> = T extends `${infer U}.${string}` ? U : T
type Trunc<T> = StrTrunc<`${T & (string | number)}`>

type TrimLeft<S extends string> = S extends `${' ' | '\n' | '\t'}${infer U}` ? TrimLeft<U> : S

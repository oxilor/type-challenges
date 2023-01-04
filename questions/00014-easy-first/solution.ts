type First<T extends any[]> = T extends [first: infer U, ...rest: any[]] ? U : never

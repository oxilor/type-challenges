type Last<T extends any[]> = T extends [...rest: any[], last: infer U] ? U : never

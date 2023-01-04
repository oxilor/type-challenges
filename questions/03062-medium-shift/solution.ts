type Shift<T extends any[]> = T extends [first: any, ...rest: infer R] ? R : T

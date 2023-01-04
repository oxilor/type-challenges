type GetMiddleElement<T extends any[]> = T['length'] extends 0 | 1 | 2
  ? T
  : GetMiddleElement<T extends [any, ...infer R, any] ? R : T>

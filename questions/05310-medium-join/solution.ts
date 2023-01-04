type J<T, U> = T extends [first: infer F, ...rest: infer R]
  ? `${U & (string | number)}${F & (string | number)}${J<R, U>}`
  : ''

type Join<T, U> = T extends [first: infer F, ...rest: infer R]
  ? `${F & (string | number)}${J<R, U>}`
  : ''

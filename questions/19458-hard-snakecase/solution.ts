type SnakeCase<S extends string> = S extends `${infer U}${infer R}`
  ? U extends UCMap[keyof UCMap]
    ? `_${Lowercase<U>}${SnakeCase<R>}`
    : `${U}${SnakeCase<R>}`
  : S

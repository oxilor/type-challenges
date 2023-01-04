type Kebab<S extends string> = S extends `${infer U}${infer R}`
  ? U extends UCMap[keyof UCMap]
    ? `-${Lowercase<U>}${Kebab<R>}`
    : `${U}${Kebab<R>}`
  : S

type KebabCase<S extends string> = S extends `${infer U}${infer R}`
  ? `${Lowercase<U>}${Kebab<R>}`
  : S

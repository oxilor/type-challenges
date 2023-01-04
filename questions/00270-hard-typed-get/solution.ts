type Get<T, K> = K extends keyof T
  ? T[K]
  : K extends `${infer U}.${infer R}`
    ? U extends keyof T
      ? Get<T[U], R>
      : never
    : never

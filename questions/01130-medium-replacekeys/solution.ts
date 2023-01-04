type ReplaceKeys<U, T, Y> = U extends object ? {
  [K in keyof U]: K extends keyof Y
    ? Y[K]
    : K extends T
      ? never
      : U[K]
} : U

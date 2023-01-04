type Flip<T> = {
  [K in keyof T as `${T[K] & (string | number | boolean)}`]: K
}

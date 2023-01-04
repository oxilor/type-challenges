type Integer<T> = `${T & number}` extends Trunc<T>
  ? number extends T
    ? never
    : T
  : never

type Primitive<T> =
  T extends string ? string :
    T extends number ? number :
      T extends boolean ? boolean :
        T

type ToPrimitive<T> = T extends object
  ? T extends Function
    ? T
    : { [K in keyof T]: ToPrimitive<T[K]> }
  : Primitive<T>

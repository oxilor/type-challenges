type ValidMonth<M1, M2> =
  M1 extends '0'
    ? M2 extends Exclude<Digit, '0'>
      ? true
      : false
    : M1 extends '1'
      ? M2 extends '0' | '1' | '2'
        ? true
        : false
      : false

type ValidDay<D1, D2, IsFeb> =
  D1 extends '0'
    ? D2 extends Exclude<Digit, '0'>
      ? true
      : false
    : IsFeb extends true
      ? D1 extends '1'
        ? D2 extends Digit
          ? true
          : false
        : D1 extends '2'
          ? D2 extends Exclude<Digit, '9'>
            ? true
            : false
          : false
      : D1 extends '1' | '2'
        ? D2 extends Digit
          ? true
          : false
        : D1 extends '3'
          ? D2 extends '0' | '1'
            ? true
            : false
          : false

type IsFebruary<M1 extends string, M2 extends string> = `${M1}${M2}` extends '02' ? true : false

type ValidDate<S extends string> = S extends `${infer M1}${infer M2}${infer D1}${infer D2}`
  ? ValidMonth<M1, M2> extends true
    ? ValidDay<D1, D2, IsFebruary<M1, M2>> extends true
      ? true
      : false
    : false
  : false

type FizzBuzz<
  N extends number,
  D3 extends any[] = [0, 0],
  D5 extends any[] = [0, 0],
  R extends string[] = ['1'],
> = R['length'] extends N
  ? R
  : D3['length'] extends 3
    ? D5['length'] extends 5
      ? FizzBuzz<N, [0], [0], [...R, 'FizzBuzz']>
      : FizzBuzz<N, [0], [...D5, 0], [...R, 'Fizz']>
    : D5['length'] extends 5
      ? FizzBuzz<N, [...D3, 0], [0], [...R, 'Buzz']>
      : FizzBuzz<N, [...D3, 0], [...D5, 0], [...R, `${([...R, '0'] & string[])['length']}`]>

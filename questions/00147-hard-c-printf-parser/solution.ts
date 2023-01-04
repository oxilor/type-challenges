type ControlsMap = {
  c: 'char'
  s: 'string'
  d: 'dec'
  o: 'oct'
  h: 'hex'
  f: 'float'
  p: 'pointer'
}

type GetPlaceholders<S extends string, A extends ControlsMap[keyof ControlsMap][] = []> =
  S extends `${string}%${infer P extends keyof ControlsMap}${infer R}`
    ? GetPlaceholders<R, [...A, ControlsMap[P]]>
    : A

type RemoveEscapes<S extends string> = S extends `${infer U}%%${infer R}` ? `${U}${RemoveEscapes<R>}` : S

type ParsePrintFormat<S extends string> = GetPlaceholders<RemoveEscapes<S>>

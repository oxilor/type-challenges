type MakeObjectWithNewTypes<T, R> = {
  [K in keyof T as R extends { mapFrom: T[K] } ? K : never]: R extends { mapFrom: T[K]; mapTo: infer U } ? U : never
}

type ReplaceTypes<T, O> = Simplify<Omit<T, keyof O> & O>

type MapTypes<T, R> = ReplaceTypes<T, MakeObjectWithNewTypes<T, R>>

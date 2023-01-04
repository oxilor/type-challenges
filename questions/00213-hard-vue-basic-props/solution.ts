type ExtractPropType<T> = T extends (new (...args: any[]) => infer U)
  ? U extends String ? string
    : U extends Number ? number
      : U extends Boolean ? boolean
        : U
  : any

type ExtractPropTypeFromArray<T> = T extends [infer F, ...infer R]
  ? ExtractPropType<F> | ExtractPropTypeFromArray<R>
  : never

type ExtractProps<T> = {
  [K in keyof T]: T[K] extends { readonly type: infer U }
    ? U extends Array<infer E>
      ? ExtractPropType<E>
      : ExtractPropType<U>
    : ExtractPropType<T[K]>
}

interface VueBasicOptions<TProps, TData, TComputed, TMethods> {
  props: TProps
  data: (this: ExtractProps<TProps>) => TData
  computed: TComputed & ThisType<ExtractProps<TProps> & TData>
  methods: TMethods & ThisType<ExtractProps<TProps> & TData & ExtractComputed<TComputed> & TMethods>
}

declare function VueBasicProps<TProps, TData, TComputed, TMethods>(options: VueBasicOptions<TProps, TData, TComputed, TMethods>): ExtractProps<TProps> & TData & ExtractComputed<TComputed> & TMethods

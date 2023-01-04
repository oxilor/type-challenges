type ExtractComputed<T> = {
  [K in keyof T]: T[K] extends (() => infer U) ? U : never
}

interface SimpleVueOptions<TData, TComputed, TMethods> {
  data: (this: void) => TData
  computed: TComputed & ThisType<TData>
  methods: TMethods & ThisType<TData & ExtractComputed<TComputed> & TMethods>
}

declare function SimpleVue<TData, TComputed, TMethods>(options: SimpleVueOptions<TData, TComputed, TMethods>): TData & ExtractComputed<TComputed> & TMethods

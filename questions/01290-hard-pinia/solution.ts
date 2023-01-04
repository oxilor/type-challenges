type ExtractGetters<T> = {
  [K in keyof T]: T[K] extends (() => any) ? ReturnType<T[K]> : never
}

interface Store<TState, TGetters, TActions> {
  id: string
  state: () => TState
  getters?: TGetters & ThisType<Readonly<TState> & ExtractGetters<TGetters>>
  actions?: TActions & ThisType<TState & Readonly<ExtractGetters<TGetters>> & TActions>
}

type ReturnStore<TState, TGetters, TActions> = TState & ExtractGetters<TGetters> & TActions

declare function defineStore<TState, TGetters, TActions>(store: Store<TState, TGetters, TActions>): ReturnStore<TState, TGetters, TActions>

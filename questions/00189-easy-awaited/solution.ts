type MyPromise<T> = { then: (f: (arg: T) => any) => any }
type ExtractPromise<T> = T extends MyPromise<infer U> ? ExtractPromise<U> : T
type MyAwaited<T extends MyPromise<any>> = ExtractPromise<T>

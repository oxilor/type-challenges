type StringToUnion<T extends string> = T extends `${infer U}${infer R}` ? U | StringToUnion<R> : never

type ClassPublicKeys<T> = { [K in keyof T]: K }[keyof T]

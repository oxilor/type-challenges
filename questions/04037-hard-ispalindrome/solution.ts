type IsPalindrome<T extends string | number> = `${T}` extends ReverseString<`${T}`> ? true : false

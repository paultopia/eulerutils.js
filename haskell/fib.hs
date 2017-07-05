module Fib where
import Listmaker

innerfib :: Int -> Int -> Int -> Maybe Int
innerfib 0 a b = Just a
innerfib 1 a b = Just b
innerfib x _ _ | x < 0 = Nothing
innerfib x a b = innerfib (x - 1) b (a + b)

fib :: Int -> Maybe Int
fib x = innerfib x 0 1

fiblist :: Int -> [Int]
fiblist = listmaker fib

module Fact where
import Listmaker

innerfact :: Int -> Int -> Maybe Int
innerfact 0 acc = Just 0
innerfact 1 acc = Just acc
innerfact x acc | x < 0 = Nothing
innerfact x acc = innerfact (x - 1) (x * acc)

fact :: Int -> Maybe Int
fact x = innerfact x 1

factlist :: Int -> [Int]
factlist = listmaker fact

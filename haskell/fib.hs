fib :: Int -> Int
fib 0 = 0
fib 1 = 1
fib x = fib (x - 1) + fib (x - 2)

fiblist :: Int -> [Int]
fiblist x = map fib [0..x]

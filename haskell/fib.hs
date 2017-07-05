fib :: Int -> Int
fib 0 = 0
fib 1 = 1
fib x | x < 0 = 0
fib x = fib (x - 1) + fib (x - 2)

fiblist :: Int -> [Int]
fiblist x = take x $ map fib [0..]

-- probably ought to have a maybe monad or something to get a Nothing in as result of negative fib?

-- fiblist (-2) -> [] --- which is fine, but I don't understand why it gets there. what does range operator do when x is out of range?

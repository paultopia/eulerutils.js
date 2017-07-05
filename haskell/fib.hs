yankiepoo :: Maybe Int -> Int
yankiepoo Nothing = 0
yankiepoo (Just x) = x

fib :: Int -> Maybe Int
fib 0 = Just 0
fib 1 = Just 1
fib x | x < 0 = Nothing
fib x = Just (yankiepoo (fib (x - 1)) + yankiepoo (fib (x - 2)))

-- this isn't tail recursive... is that a problem?

fiblist :: Int -> [Int]
fiblist x =
  let maybelist = map fib [0..]
      intlist = map yankiepoo maybelist
  in take x intlist


-- fiblist (-2) -> [] --- which is fine, but I don't understand why it gets there. what does range operator do when x is out of range?

module Prime where

intsqrt = ceiling . sqrt . fromIntegral

isprime :: Int -> Bool
isprime candidate | candidate < 2 = False
isprime candidate | candidate == 2 = True
isprime candidate =
  let testpool = 2:[3, 5 .. intsqrt candidate]
  in not $ any (\x -> mod candidate x == 0) testpool

primeslist :: Int -> [Int]
primeslist x = take x (filter isprime [2..])

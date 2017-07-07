module Listmaker where
import Yankiepoo

listmaker :: (Int -> Maybe Int) -> (Int -> [Int])
listmaker func =
  let maybelist = map func [0..]
      intlist = map yankiepoo maybelist
  in (`take` intlist)

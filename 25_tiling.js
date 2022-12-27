let tiling = function (n) {
    // 피보나치와 비슷한듯 하다
    // 전 수와 전전 수를 더하는 재귀함수 작성
    const memo = [1, 1]
    const func = (n) => {
      if(memo[n]!==undefined) {
        return memo[n]
      }
      memo[n] = func(n-1) + func(n-2)
      return memo[n]
    }
    return func(n)
  };
  // 1 = 1
  // 2 = 2
  // 3 = 3
  // 4 = 5
  // 5 = 8
  // 6 = 13
  //21 34 55 89
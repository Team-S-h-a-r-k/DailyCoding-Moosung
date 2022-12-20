function fibonacci(n) {
  // base case
  // n이 0일 경우 0반환
  // n이 1일 경우 1반환
  // recursive case
  // fibonacci(n) = fibonacci(n-1) + fibonacci(n-2)

  // if(n<=0) {
  //   return 0;
  // }
  // if(n===1) {
  //   return 1;
  // }

  // return fibonacci(n-2)+fibonacci(n-1)

  // 위의 식은 작동은 된다. 여기서만 안되는 것 같다.
  // 즉, 뭔가 다른 식으로 풀어봐라 인가보다.
  // 위의 식의 문제는 fibonacci를 계산하는게 중복된다.
  // 중복 계산되는 부분을 줄이면 될 것 같다는 나의 생각이다. 
  // 내일 재도전이다 슈밤바

  // 12.20(화)
  // 배열에 전에 계산한 값을 저장(피보나치는 0번째 부터 시작하므로 배열의 인덱스로 사용)
  // 배열에 값이 있을 경우 배열의 값을 그대로 반환
  // 없을 경우 전 인덱스와 전전인덱스의 값을 더해 저장 후 저장한값 반환
  const memo = [0, 1];
  const func = (n) => {
    if(memo[n]!==undefined) {
      return memo[n]
    }
    memo[n] = func(n-1) + func(n-2);
    return memo[n];  
  }
  return func(n);
}

// 반복 계산을 없애야 해서 전에 계산한 값을 저장 하는 것까진 유추해 냈지만 하는 방법을 생각해 내기 힘들었다.
// 솔직히 레퍼런스를 보지 않았다면 풀 수 없었을 문제
// 하지만 이런식으로 값을 저장하면 된다는 것을 알았으니 이젠 풀수 있을것 같다 까먹을때 즈음 다시 풀어보기!

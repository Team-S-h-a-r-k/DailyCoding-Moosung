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
}
function computeSquareRoot(num) {
    // 초기값을 정한다.
    // 제곱이 num일 경우 멈춤
    // 아니면 초기값에 + 0.001
    // 결과값 반환
    let result = 1;
    while(result**2 < num) {
      result = result + 0.001;
    }
    result = result.toFixed(2)
    return Number(result);
  }
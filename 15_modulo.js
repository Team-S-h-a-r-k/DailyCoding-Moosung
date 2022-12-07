function modulo(num1, num2) {
    // num1이 0일 경우 0반환
    // num2가 0일 경우 'Error: cannot divide by zero'반환
    // num1이 num2 보다 작아질 때까지 반복하는 반복문 작성
    // 반복문에서 num1을 num2로 뺌
    // 나머지 반환
    if(!num2) {
      return 'Error: cannot divide by zero';
    }
    if(!num1) {
      return 0;
    }
    while(num1>=num2){
      num1=num1-num2;
    }
  return num1;
  }
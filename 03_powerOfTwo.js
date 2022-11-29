function powerOfTwo(num) {
    // 1. num을 2로 나누었을때 나머지가 0이면 2로 나누어준다.
    // 2. 반복문 밖에서 num이 1일 경우 true반환
    // 3. 2번 조건이 아닐 경우 false반환
  
    while(num%2===0) {
        num = num / 2;
    }
    if(num===1) {
      return true;
    }else{
      return false;
    }
  
  }
  
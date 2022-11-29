function computeWhenDouble(interestRate) {
    // 1. interestRate가 2배가 될때 까지 반복문을 돌린다.
  
  let first = 100;
  let double = 200;
  let count = 0;
  for(let i = 1; i<100; i++) {
    if(first<double) {
      first = first*(interestRate*0.01+1);
      count++;
    }else{
      break;
    }
  }
    return count;
  }
  
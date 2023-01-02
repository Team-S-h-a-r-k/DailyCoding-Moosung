function power(base, exponent) {
    // base를 exponent 반복하여 곱하는 반복문 작성
    // base를 94906249로 나누었을때 1보다 크다면 나누어 나머지에 다시 계산
    // base 반환
    // let result = 1
    // for(let i = 0; i<exponent; i++) {
    //   result = result * base;
    //   if(result/94906249 > 1) {
    //     result = result%94906249
    //   }
    // }
    // return baresultse
  
    // 2차 
    let count = 1
    const memo = {1:base}
    while(count<exponent) {
      if(count * 2 <= exponent){
        base = base * base
        count = count * 2;
        memo[String(count)] = base
      }else{
        if(memo[String(exponent-count)]!==undefined) {
          base = base * memo[String(exponent-count)]
          count = count + exponent-count
        }else{
          if((exponent-count)%2===0){
            base = base * memo['2']
            count = count + 2
          }else{
            base = base * memo['1']
            count = count + 1
          }
        }
      }
      if(base/94906249>1){
        base = base%94906249
      }
    }
    return base
  }

  // 효율적인 알고리즘 통과 못함
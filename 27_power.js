
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
  // let count = 1
  // const memo = {1:base}
  // while(count<exponent) {
  //   if(count * 2 <= exponent){
  //     base = base * base
  //     count = count * 2;
  //     memo[String(count)] = base
  //   }else{
  //     if(memo[String(exponent-count)]!==undefined) {
  //       base = base * memo[String(exponent-count)]
  //       count = exponent
  //     }else{
  //       if((exponent-count)%2===0){
  //         base = base * memo['2']
  //         count = count + 2
  //       }else{
  //         base = base * memo['1']
  //         count = count + 1
  //       }
  //     }
  //   }
  //   if(base/94906249>1){
  //     base = base%94906249
  //   }
  // }
  // return base
  // 효율적인 알고리즘 통과가...

  // 래퍼런스
  // 재귀 사용
  // exponent가 0이라면 0제곱이므로 1을 반환 
  // exponent 반을 줄여가며 재귀(전의 제곱 값을 재귀)
  // exponent 반으로 줄였을때 값을 내림
  // 제곱한 값을 94906249로 나머지를 구해봄(제곱한 값이 94906249을 넘으면 나누어지고 나머지가 남지만 넘지 않는다면 제곱한 값이 나머지가 된다.)
  // exponent가 홀수였을 경우 내림을 해주었기 때문에 base를 한번더 곱해주고 94906249을 넘길 가능성이 있기 때문에 94906249의 나머지를 구해본다.
  // 짝수일 경우 나머지를 그래도 반환
  // 지금은 외워서 하는것 밖에 되지 않기 때문에 다음에 있다가 정규수업끝나고 한번더 풀어봐야겠다.
  function power(base, exponent) {

    if(exponent===0) {
      // base의 0제곱이므로 1
      return 1
    }
    const sqrt = power(base, Math.floor(exponent/2))
    const result = (sqrt * sqrt)%94906249
    // 반으로 나누었을때 내림을 해주었기 때문에 원래 홀수 였다면 base를 한번더 곱해주어야하며 곱했을때 94906249가 넘을 수 있어 나머지를 구해준다.
    return exponent%2?(result*base)%94906249:result
  }
function insertDash(str) {
    // str을 순회하는 반복문 작성
    // str[i]를 숫자로 바꾼 후에 홀수라면 뒤에 -을 붙인다.
    let result='';
    for(let i = 0; i<str.length; i++) {
      if(Number(str[i])%2 && Number(str[i+1])%2) {
        result = result + str[i] + '-'
      }else{
        result = result + str[i]
      }
    }
    return result;
  }
  
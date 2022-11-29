function firstReverse(str) {
    // result 선언 빈 문자열 할당
    // 문자열을 순회하는 반복문 작성
    // 반복문에서 result에 뒤집힌 문자열 +
    // result 반환
  
    let result = '';
    for(let i =0; i<str.length; i++) {
      result = result + str[str.length-1-i];
    }
    return result;
  }
  
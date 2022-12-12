function numberSearch(str) {
    // 공백 제거
    // 문자열을 순회하는 반복문 작성
    // 반복문에서 숫자를 순회하는 반복문 작성
    // 문자열의 요소와 숫자가 같을 경우 문자열에서 숫자 제거 result에 숫자 더하기
    // 반복문 밖에서 result를 남은 문자열의 길이로 나누기
    // 나눈값 반환
    let filteredStr = str.split(' ').join('')
    let result = 0;
    let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  
    if(str === '') {
      return result;
    }
  
    for(let i = 0; i<filteredStr.length; i++) {
      for(let j = 0; j<num.length; j++) {
        if(filteredStr[i]==num[j]) {
          filteredStr = filteredStr.replace(filteredStr[i], '')
          result = result + num[j];
        }
      }
    }
    return Math.round(result/filteredStr.length)
  }
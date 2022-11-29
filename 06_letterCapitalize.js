function letterCapitalize(str) {
    // split으로 잘라서 단어 배열 만들기
    // result 선언 빈배열 할당, newStr 선언 빈문자열 할당
    // 단어 배열을 순회하는 반복문 작성
    // 반복문 안에서 배열의 값인 문자열을 순회하는 반복문 작성
    // 값이 공백이 아닐 경우 0번째 인덱스의 문자열만 대문자로 변환하여 newStr에 추가, 나머지는 그냥 추가
    // 2번째 반복문 밖에서 빈배열에 추가
    // result를 join메소드를 이용하여 문자열로 변환 후 반환
    
    let arr = str.split(' ')
    let result = [];
    let newStr = '';
    for(let i = 0; i<arr.length; i++) {
      for(let j=0; j<arr[i].length; j++) {
        if(arr[i][j-1] === ' ' || arr[i][j-1] === undefined && arr[i][j]) {
          newStr = newStr + arr[i][j].toUpperCase();
        }else{
          newStr = newStr + arr[i][j]
        }
      }
      result[i] = newStr;
      newStr = '';
    }
    return result.join(' ');
  }
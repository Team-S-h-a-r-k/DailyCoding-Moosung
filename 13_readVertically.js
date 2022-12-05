function readVertically(arr) {
    // result 선언 빈 문자열 할당, long 선언 가장 긴 문자열을 찾아 길이를 할당
    // 가장 긴 길이만큼 순회하는 반복문 작성
    // 반복문에서 배열의 길이만큼 순회하는 반복문 작성
    // 2번째 반복문에서 문자열 인덱스의 값이 undefined가 아닐경우 result에 추가
    // result 반환
    let result = '';
    let long = arr.reduce((acc, cur) => acc.length < cur.length ? cur : acc);
  
    for(let i = 0; i < long.length ; i++) {
      for(let j = 0; j < arr.length ; j++) {
        if(arr[j][i]) {
          result = result + arr[j][i];
        }
      }
    }
    return result;
  }
  
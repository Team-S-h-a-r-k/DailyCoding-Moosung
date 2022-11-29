function firstCharacter(str) {
    // 1. result 선언 빈 문자열 할당, arr 선언
    // 2. split 메소드를 사용하여 공백을 제거하고 배열로 만들고 arr에 할당
    // 3. 배열의 각 요소에 첫번째 글자만 result에 할당
    // 4. result 반환
  
    let result = '';
    let arr = str.split(' ');
    if(str === '') {
      return result;
    }
    for(let i = 0; i<arr.length; i++) {
      result = result + arr[i][0];
    }
    return result;
  }
  
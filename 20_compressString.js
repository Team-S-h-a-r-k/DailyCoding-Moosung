function compressString(str) {
    // 임시 저장할 변수 선언, result 빈 문자열 선언, 숫자 셀 count선언
    // str을 순회하는 반복문 작성
    // 반복문에서 이번 요소와 전 요소가 같다면 count++ 임시 저장 변수에 저장
    // count가 3이상이라면 임시 저장 변수의 문자를 하나로 압축
    // 이번 요소와 전 요소가 다르다면 result에 count와 임시저장변수 값 추가 count, 임시저장변수 초기화
    // 반복문 밖에서 result 반환
  
    let saveStr = str[0];
    let result = '';
    let count = 1;
    for(let i = 1; i<=str.length; i++) {
      if(str[i-1]===str[i]) {
        count++;
        saveStr = saveStr + str[i];
      }else if(str[i-1]!==str[i]&&count>=3){
        result = result + count + saveStr;
        count = 1;
        saveStr = str[i];
      }else{
        result = result + saveStr;
        count = 1;
        saveStr = str[i];
      }
      if(count>=3) {
        saveStr = str[i];
      }
    }
    return result;
  }
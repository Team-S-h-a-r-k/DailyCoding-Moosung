function decryptCaesarCipher(str, secret) {
    // a부터 z까지 포함된 문자열 선언,result 빈문자열 선언
    // str을 순회하는 반복문 작성
    // 반복문에서 만든 문자열을 순회하는 반복문 작성
    // 2번째 반복문에서 str의 요소와 문자열의 요소가 같을 경우 문자열 요소의 인덱스-3에 있는 문자열을 result에 추가
    // 공백일 경우 문자열요소 그래로 result에 추가 
    // 반복문 밖에서 result 반환   
  
    let str2 = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
  
    for(let i = 0; i<str.length; i++) {
      for(let j = 0; j<str2.length; j++) {
        if(str[i]===str2[j]&&j>=secret) {
          result = result + str2[j-secret];
          break;
        }else if(str[i]===str2[j]&&j<secret) {
          result = result + str2[j+str2.length-secret];
          break;
        }else if(str[i]===' ') {
          result = result + ' ';
          break;
        }
      }
    }
    return result;
  }
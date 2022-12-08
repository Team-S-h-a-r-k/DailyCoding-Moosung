function isIsogram(str) {
    // str을 순회하는 반복문 작성
    // 반복문에서 str을 순회하는 반복문 작성
    // 두번째 반복문에서 같은 문자가 있다면 result는 false 반복문 break
    // result 반환
  
    let result = true;
    let strLow = str.toLowerCase()
    for(let i=0;i<strLow.length;i++) {
      for(let j=i+1;j<strLow.length;j++) {
        if(strLow[i]===strLow[j]) {
          result = false;
          break;
        }
      }
    }
    return result;
  }
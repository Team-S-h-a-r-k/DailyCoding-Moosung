function ABCheck(str) {
    // str소문자로 만들기
    // str에서 a의 인덱스를 찾은 후 +4한 인덱스에 b가 있을 경우 true
    // str에서 b의 인덱스를 찾은 후 +4한 인덱스에 a가 있을 경우 true
    let strLower = str.toLowerCase();
    let aIndex = [];
    let bIndex = [];
  
    for(let i = 0; i<strLower.length; i++) {
      if(strLower[i]==='a') {
        aIndex.push(i);
      }else if(strLower[i]==='b') {
        bIndex.push(i);
      }
    }
    for(let i = 0; i<aIndex.length; i++) {
      if(strLower[aIndex[i]+4] === 'b') {
        return true;
      }
    }
    for(let i = 0; i<bIndex.length; i++) {
      if(strLower[bIndex[i]+4] === 'a') {
        return true;
      }
    }
    return false;
  }
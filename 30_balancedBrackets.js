const balancedBrackets = function (str) {
    // str을 순회하는 반복문 작성
    // 반복문에서 여는괄호를 만났을경우 false를 저장
    // 닫는 괄호를 만났을경우 저장한 false가 있다면 제거
    // 저장한 false가 없을 경우 반복문을 종료하고 false반환
    // 반복문 밖에서 저장한 false가 남아있다면 flase반환
    // 빈배열이라면 true 반환
    const save = [];
    for(let i = 0; i<str.length; i++) {
      if(str[i]==='('){
        save.push(0)
      }else if(str[i]===')'){
        if(save.length===0){
          return false
        }else{
          save.pop()
        }
      }
    }
    if(save.length===0){
      return true
    }else{
      return false
    }
};
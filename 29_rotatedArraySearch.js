const rotatedArraySearch = function (rotated, target) {
    // 원래라면 전부 탐색 후 맞는것이 있는지 찾기
    // for(let i = 0 ; i<rotated.length; i++) {
    //   if(rotated[i]===target){
    //     return i
    //   }
    // }
    // return -1
    // 효율적인 알고리즘 컷
  
  
    //0번째 인덱스를 비교했을때 target이 작을 경우 뒤에서부터 찾기
    if(rotated[0]<=target) {
      for(let i = 0 ; i<rotated.length; i++) {
        if(rotated[i]===target){
          return i
        }
      }
      return -1
    }else{
      for(let i = rotated.length-1 ; i>=0; i--) {
        if(rotated[i]===target){
          return i
        }
      }
      return -1
    }
  };
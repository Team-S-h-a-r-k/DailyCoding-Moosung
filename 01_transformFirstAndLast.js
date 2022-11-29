function transformFirstAndLast(arr) {
    // 1. 빈 객체를 생성
    // 2. arr이 빈 배열이라면 빈 객체 반환 
    // 3. 빈 객체에 배열의 첫번째 요소를 key로 하고 마지막 요소로 값을 하는 요소를 추가한다.
    // 4. 생성한 객체를 반환
  
    let obj = {};
  
    if(arr.length === 0) {
      return obj;
    }
    
    obj[arr[0]] = arr[arr.length-1];
  
    return obj;
  }
  
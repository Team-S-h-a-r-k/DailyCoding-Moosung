function convertListToObject(arr) {
    // arr전체에 영향을 주는 반복문 map작성
    // arr[i]의 첫 번째 요소를 키, 두 번째 요소를 값으로 하는 객체를 생성하는 콜백함수 작성
    // 값 반환
    let result = {};
    arr.map((val)=>{
      if(val.length !== 0 && result[val[0]] === undefined) {
        result[val[0]] = val[1];
      }
    })
    return result;
  }
  
function superIncreasing(arr) {
    // 배열을 순회하는 반복문 작성
    // 반복문에서 이전 수들의 합이 현재 요소보다 큰지 판별
    let result = 0;
    for(let i = 1; i<arr.length; i++){
      result = result + arr[i-1];
      if(result>=arr[i]) {
        return false;
      }
    }
    return true;
  }
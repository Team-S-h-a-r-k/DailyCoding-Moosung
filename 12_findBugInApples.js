function findBugInApples(arr) {
    // arr을 순회하는 반복문 작성
    // 반복문에서 arr의 요소를 순회하는 반복문 작성
    // 두 번째 반복문에서 'B'를 찾을경우 인덱스 반환
    for(let i= 0; i<arr.length; i++) {
      for (let j = 0; j<arr[i].length; j++) {
        if(arr[i][j]==='B') {
          return [i, j];
        }
      }
    }
  }
const bubbleSort = function (arr) {
    // count변수를 선언, 요소의 순서를 바꿀시 카운팅 되게 반복분 안의 조건문 안에 작성
    // 배열을 순회하는 반복문 작성 
    // 반복문에서 배열을 순회하는 반복문 작성
    // 두번째 반복문에서 arr[i]이 arr[i+1]보다 크다면 둘의 위치를 바꿈, count++
    // 두번째 반복문 밖에서 count가 증가하지 않았을 경우 이미 정렬된 상태라고 파악하고 break
    // 모든 반복문 밖에서 arr반환  
    let count = 0;
    for(let i = 1; i<arr.length; i++) {
      for(let j = 0; j<arr.length-i; j++) {
        if(arr[j]>arr[j+1]){
          [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
          count++;
        }
      }
      if(count === 0) {
        break;
      }
    }
    return arr;
  };
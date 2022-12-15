const largestProductOfThree = function (arr) {
    // result 선언 인덱스가 0인 배열의 요소와 인덱스가 1인 배열의 요소의 곱을 할당
    // 배열을 순회하는 반복문 작성
    // 반복문에서 배열을 순회하는 반복문 작성
    // 반복문에서 배열을 순회하는 반복문 작성
    // 반복문에서 배열 세 요소의 곱이 result보다 클 경우 result에 배열 세 요소의 곱 할당
    // 반복문 밖에서 result 반환
    let result = arr[0]*arr[1]*arr[2];
    for(let i = 0; i<arr.length; i++) {
      for(let j = i+1; j<arr.length; j++) {
        for(let k = j+1; k<arr.length; k++) {
          if(arr[i]*arr[j]*arr[k]>result) {
            result = arr[i]*arr[j]*arr[k];
          }
        }
      }
    }
    return result;
  };
  
  // 레퍼런스 코드 
  //const largestProductOfThree = function (arr) {
  //  const sorted = arr.slice().sort((a, b) => a - b);
  //  const len = arr.length;
  //  const candi1 = sorted[len - 1] * sorted[len - 2] * sorted[len - 3];
  //  const candi2 = sorted[len - 1] * sorted[0] * sorted[1];
  //  return Math.max(candi1, candi2);
  //};
  
  // 레퍼런스 코드는 오름차순으로 정돈 후 가장 큰 값 3개의 곱과 가장 작은 값 두 개와 가장 큰 값의 곱 중 최대 값을 찾아 반환했다.
  // 굳이 반복문을 돌릴 필요가 없다는 것에 감탄했고 저 두개만 비교하면 최대값을 알 수 있구나를 알게 되었다.
  // 그럼 최소값은? 반대로 하면 되는 것 같다. (오름차순으로 정돈 후 가장 작은 값 3개의 곱과 가장 큰 값 두 개와 가장 작은 값의 곱 중 최소 값을 찾아 반환)
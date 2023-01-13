const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
    // 두 배열을 합치고 오름차순으로 정렬
    // 해당 인덱스의 요소 반환
    // const arr = [...arr1, ...arr2]
    // arr.sort((a,b)=>a-b)
    // return arr[k-1]
    // 디테일 부족
  
    // 두 길이를 더한수의 절반보다 크다면 뒤에서부터  순회하는 반복문 작성
    // 반복문에서 두 값의 마지막 인덱스의 값을 비교하여 더 큰 것을 제거
    // i가 k라면 제거한 값을 반환
    //  두 길이를 더한수의 절반보다 작다면 앞에서부터  순회하는 반복문 작성
    // 반복문에서 두 값의 첫번째 인덱스의 값을 비교하여 더 작은 것을 제거
    // i가 k라면 제거한 값을 반환
  
    let arrLength = arr1.length+arr2.length
    if(arrLength/2<k) {
      for(let i = arrLength; i>arrLength/2; i--) {
        if(i===k){
          if(arr1[arr1.length-1]>=arr2[arr2.length-1]){
            return arr1.pop()
          }else{
            return arr2.pop()
          }
        }else{
          if(arr1[arr1.length-1]>=arr2[arr2.length-1]){
            arr1.pop()
          }else{
            arr2.pop()
          }
        }
      }
    }else{
      for(let i = 1; i<=arrLength/2; i--) {
        if(i===k){
          if(arr1[arr1.length-1]<=arr2[arr2.length-1]){
            return arr1.shift()
          }else{
            return arr2.shift()
          }
        }else{
          if(arr1[arr1.length-1]<=arr2[arr2.length-1]){
            arr1.shift()
          }else{
            arr2.shift()
          }
        }
      }
    }
  };
// 문제가 해결됐다가 안됐다가 한다...다음에 꼭 다시 풀어보기  
const isSubsetOf = function (base, sample) {
  // sample을 순회하는 반복문 작성
  // 반복문에서 base안에 sample의 요소가 있는지 판별
  // 없다면 false반환 break

  // let result;
  // for(let i = 0; i<sample.length; i++) {
  //   result = base.includes(sample[i]);
  //   if(result===false) {
  //     break;
  //   }
  // }
  // return result;

  //직접 순회를 해볼까?
  // sample을 순회하는 반복문 작성
  // 반복문에서 base를 순회하는 반복문 작성
  // 두번째 반복문에서 sample의 요소가 base의 요소 중에 있을 경우 결과를 true, base 요소 제거
  // 없을 경우 결과를 false반환
  
  // let result;
  // for(let i = 0; i<sample.length; i++) {
  //   for(let j = 0; j<base.length; j++) {
  //     if(sample[i]===base[j]) {
  //       result = true;
  //       base.splice(j, 1)
  //       break;
  //     }else{
  //       result = false;
  //     }
  //   }
  //   if(result === false) {
  //     break;
  //   }
  // }
  // return result;

  // 계산 시간을 줄여야한다.
  // 오름차순 정렬 
  // 정렬 후 중간값을 찾고 어디에 sample이 있는지 확인
  // 확인 후 같은 방법으로 base의 범위 줄이기 
//   let result;
//   let baseSort = base.sort((a,b)=>a-b);
//   let sampleSort = sample.sort((a,b)=>a-b);
//   for(let i = 0; i<sample.length; i++) {
//     let arr = baseSort.slice(0)
//     while(arr.length!==1) {
//       if(arr[Math.ceil(baseSort.length/2)]>sampleSort[i]) {
//         arr = arr.slice(0, Math.ceil(arr.length/2))
//       }else if(arr[Math.ceil(baseSort.length/2)]<sampleSort[i]){
//         arr = arr.slice(Math.ceil(arr.length/2)+1)
//       }else{
//         arr.splice(arr[Math.ceil(baseSort.length/2)], 1)
//         break;
//       }
//       if(arr[0]===sampleSort[i]) {
//         result = true;
//       }else{
//         result = false;
//         break;
//       }
//     }
//     return result
//   };
// }
// 위의 결과는 85점 짜리다 왜 마지막 케이스가 통과가 안되는지 모르겠다...
//  레퍼런스 코드를 봐도 모르겠다 ㅋㅋㅋㅋ 좀더 살펴 봐야겠다....

// 제거 방식
// sample과 base를 오름차순으로 정렬
// sample을 순회하는 반복문 작성
// base를 순회하는 반복문 작성
// 이중 반복문을 사용하지 않으려면 차례로 비교하게 해야한다
// sample의 요소와 base의 요소가 같다면 sample에서 요소 제거 base의 요소 보다 작은 수 모두 제거
// sample이 빈배열 이라면 true 아니라면 false반환

// 이중반복문 버전
// base.sort((a, b)=> a-b);
// sample.sort((a, b)=> a-b);

// for(let i = 0; i<sample.length; i++) {
//   for(let j = 0; j<base.length; j++) {
//     if(sample[i]===base[j]) {
//       sample.shift();
//       base = base.slice(j+1)
//     }
//   }
// }
// if(sample.length === 0) {
//   return true;
// }
// return false;
// 실행 초과

// 이중반복문 제거 페어분께서 알려준 버전
base.sort((a, b)=> a-b);
sample.sort((a, b)=> a-b);

for(let i = 0; i<base.length; i++) {
  if(base[i]===sample[0]) {
    sample.shift();
  }
}
if(sample.length === 0) {
  return true;
}
return false;
};
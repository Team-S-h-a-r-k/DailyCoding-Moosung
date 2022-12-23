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
    // let baseSort = base.sort((a,b)=>a-b);
    // let sampleSort = sample.sort((a,b)=>a-b);
    // if(baseSort[Math.ceil(baseSort.length/2)]<sampleSort[0])
    
  };
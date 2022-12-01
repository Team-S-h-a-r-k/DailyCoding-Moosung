function removeExtremes(arr) {
    // mini,max,miniIdx,maxIdx선언
    // arr을 순회하는 반복문 작성
    // 반복문에서 arr[i]가 mini보다 작거나 같을 경우 arr[i]의 값을 mini에 인덱스를 miniIdx에 할당
    // max보다 클 경우 arr[i]의 값을 max에 인덱스를 maxIdx에 할당
    // 반복문 밖에서 splice를 이용하여 arr의 요소 제거 
    // arr 반환
  
    let mini = arr[0].length;
    let max  = arr[0].length;
    let miniIdx = 0;
    let maxIdx = 0;
    for(let i = 1; i<arr.length; i++) {
      if(mini>=arr[i].length) {
        mini = arr[i].length;
        miniIdx = i;
      }else if(max<arr[i].length) {
        max = arr[i].length;
        maxIdx = i;
      }
    }
    if(miniIdx<maxIdx){
      arr.splice(miniIdx,1);
      arr.splice(maxIdx-1,1);
    }else{
      arr.splice(miniIdx,1);
      arr.splice(maxIdx,1);
    }
  
    return arr;
  }
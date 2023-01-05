let bfs = function (node) {
    // TODO: 여기에 코드를 작성합니다.
  
    // const childrenMap = node.children.map(el=>{
    //   return bfs(el)
    // })
  
    //value를 먼저 나열 후 children을 나열한다
    // const va = [];
    // const ch = [];
    // for(let key in node) {
    //   if(key === value) {
    //     va.push(node[key])
    //   }else{
    //     for(let i = 0; i< node.children.length; i++){
    //       ch.push(bfs(node.children[i]))
    //     }
    //   }
    // }
  
    // return [...va, ...ch]
  
    //결국 레퍼런스
    //node를 children과 같은 형태인 배열로 만듦
    //node 객체를 하나씩 꺼내 value만 저장
    //children은 배열의 맨 마지막으로 push
    let arrNode = [node];
    const result = [];
    while(arrNode.length>0) {
      const first = arrNode[0];
      arrNode = arrNode.slice(1);
      result.push(first.value)
      first.children.forEach((child)=>arrNode.push(child))
    }
    return result;
  };
  
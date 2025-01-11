function solution(tickets) {
  const visited =Array(tickets.length).fill(false)
     const result= ['ICN'];
     // 티켓을 사전순으로 정렬
    tickets.sort((a, b) => a[1].localeCompare(b[1]));
    
    function dfs ( current) {
        if(visited.every(val=>val===true)) return true;
            for(let i=0;i<tickets.length;i++){
               if(!visited[i] && tickets[i][0]===current){     
                 
                   visited[i]= true;
                     result.push(tickets[i][1])
                   
                   if(dfs(tickets[i][1])){
                       return true;
                   }
                        // 백트래킹: 상태 복구
        visited[i] = false;
        result.pop();
                   
               }
        }
        return false;
            }

    dfs( 'ICN')
  return result 
}
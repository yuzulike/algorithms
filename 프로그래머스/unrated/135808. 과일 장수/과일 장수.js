function solution(k, m, score) {
    var answer = 0;
    score.sort((a,b)=>b-a) // score을 내림차순으로 정렬
    for(let i =0; i<Math.floor(score.length/m); i++){ // m개씩 끊어서 min*m을 answer에 더해줄 것임, m개씩 끊고 남는 요소들은 버려주었음
       answer += (Math.min(...score.slice(i*m,i*m+m)))*m
    }
    return answer;
}
function solution(t, p) {
    var answer = 0;
    for(let i=0 ; i<t.length - p.length + 1 ; i++){
       let number =t.slice(i,i+p.length)
       if(number <= p) answer += 1;
    }
    return answer;
}
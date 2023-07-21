function solution(n) {
    var answer = [];
    for(let i = n; i > 0 ; i--){
    if(n % i === 0) answer.push(n/i)
    }
    return answer;
}
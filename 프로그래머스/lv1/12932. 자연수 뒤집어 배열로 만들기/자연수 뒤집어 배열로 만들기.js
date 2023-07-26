function solution(n) {
    var answer = n.toString().split('').reverse().map(ele=>Number(ele))
    return answer;
}
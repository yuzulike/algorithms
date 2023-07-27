function solution(n) {
    var answer = Number(n.toString().split('').sort((a,b)=> b-a).join(''))
    return answer;
}
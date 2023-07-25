function solution(s) {
    let arr = s.split(' ');
    let answer = Math.min(...arr)+' '+ Math.max(...arr);
    return answer;
}
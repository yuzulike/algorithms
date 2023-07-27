function solution(arr, divisor) {
    var answer = arr.filter(ele=>ele % divisor == 0).sort((a,b)=> a-b);
    return answer.length ? answer : [-1];
}
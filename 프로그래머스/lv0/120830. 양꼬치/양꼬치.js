function solution(n, k) {
    var answer = 12000*n +  (k - Math.floor(n/10)) * 2000
    return answer;
}
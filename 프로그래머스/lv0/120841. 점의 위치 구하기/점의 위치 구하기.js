function solution(dot) {
    let [a,b] = dot;
 let answer= a > 0 ? (b > 0 ? 1 : 4) : (b > 0 ? 2 : 3 )
    return answer;
}
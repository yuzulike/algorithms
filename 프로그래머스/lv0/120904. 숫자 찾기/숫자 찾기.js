function solution(num, k) {
    let answer = (num+'').indexOf(k+'') 
    return answer == -1 ? -1 : answer +1
}
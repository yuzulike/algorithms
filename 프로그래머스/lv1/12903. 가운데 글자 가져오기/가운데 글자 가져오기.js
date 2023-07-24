function solution(s) {
    let count = s.length
    return count % 2 ?  s[(count-1)/2]: s[count/2-1] +s[count/2]
    
}
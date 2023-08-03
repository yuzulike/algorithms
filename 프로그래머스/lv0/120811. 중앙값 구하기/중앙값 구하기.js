function solution(array) {
    var answer = array.sort((a,b)=>a-b)[(array.length-1)/2];
    return answer;
}
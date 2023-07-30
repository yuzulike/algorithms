function solution(n, left, right) {
    // 1 2 3 4 n 2 2 3 4 n 3 3 3 4 n 4 4 4 4 n 
    // 규칙성을 순서를 n으로 나눈 나머지,몫에서 발견
    var answer = [];
    for( let i = left; i<= right ; i++){ // left- right 까지 배열 구하기
    let divider = Math.floor((i+1) / n); // (index+1)에 n을 나눈 몫
    let remainder = (i+1) % n; // (index+1)에 n을 나눈 나머지
    if(divider >= remainder && remainder !== 0) answer.push(divider+1); // 몫이 나머지보다 크거나 같은 경우 (몫+1)이 배열 값임
    else answer.push(remainder || n); // 나머지가 몫보다 크면 나머지, 나머지가 0이면 n이 요소 값임
    }
    return answer;
}
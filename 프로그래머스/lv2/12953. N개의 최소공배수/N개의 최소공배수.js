function solution(arr) {
    let answer = 1;
    let multiple = arr.reduce((acc,cur) => acc * cur); // array 모든 요소의 곱 구하기
    for ( let i =1 ; i <= multiple ; i++){ // 모든 요소의 곱까지 for문 돌리기
  if( arr.filter(ele=> i % ele == 0).length === arr.length)  { // 숫자를 요소로 나눴을 때 나머지가 0인 수 중에
      answer =i;
      break; // 최소 수가 나오면 stop
      }
    }
    return answer;
}
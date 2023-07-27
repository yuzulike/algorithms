function solution(left, right) {
    var answer = 0;
    for(let i=left; i<= right; i++){  // left에서 right 까지 약수의 개수 세는 for문 돌리기
        let number = 0;
        for(let j=1; j<= i ; j++){
            if(i%j == 0) number++; // 약수의 개수 세기
        }
       answer = number % 2 ? answer-i : answer+i // 약수의 개수가 홀수면 answer에 i를 빼고, 짝수면 i를 더하기
    }
    return answer;
}
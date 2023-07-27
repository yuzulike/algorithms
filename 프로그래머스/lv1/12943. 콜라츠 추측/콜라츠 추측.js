function solution(num) {
    var answer = 0;
    while(num>1){
        answer++;
        if(answer >= 500) return -1;
        if(num % 2 == 0) num /= 2;
        else if(num % 2) num = 3*num +1;
          }
    return answer;
}
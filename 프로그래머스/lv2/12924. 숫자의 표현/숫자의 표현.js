function solution(n) {
    let answer = 1;
for(i=1; i<=n/2; i++){
    let start = i;
     let a = 1;
    while(start<=n){
        start += i+ a;
        a++;
        if(start == n) break;
    }
    if(start == n) answer++;
}
    return answer;
}
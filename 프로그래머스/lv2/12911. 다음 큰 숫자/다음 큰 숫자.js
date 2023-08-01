function solution(n) {
    let count = n+1; // n 다음 수부터 판별시작
    while(count.toString(2).split("1").length!==n.toString(2).split("1").length){ 
        count++ // n 다음 수부터 이진법을 1로 나눈 배열의 길이로 1의 개수를 판단하여 길이가 같아질때까지 반복문을 돌림
    }
    return count;
}
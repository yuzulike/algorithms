function solution(t, p) {
    var answer = 0;
    for(let i=0 ; i<t.length - p.length + 1 ; i++){ // p의 길이로 잘랐을 때 나오는 갯수
       let number =t.slice(i,i+p.length) // p의 길이와 똑같게 자름
       if(number <= p) answer += 1; // p보다 작을 시 answer 횟수 추가
    }
    return answer;
}
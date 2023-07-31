function solution(progresses, speeds) {
    let days= progresses.map((ele,i)=> Math.ceil((100-ele)/speeds[i])) // 작업 별 걸리는 날 
    let answer = []; // 정답 배열
    let ele= 1; // 정답에 들어갈 요소
    let initial = days[0];
    for(let i =0; i< days.length ; i++){ 
        if(initial >= days[i+1]) ele ++; // 비교군 process의 일수보다 더 작으면 요소+1
        else {
            answer.push(ele); // 계산된 요소를 배열에 더해준다. 
            ele=1; // 요소는 1로 리셋
            initial = days[i+1];// 비교군 process 변경
        }
    }
    return answer;
}
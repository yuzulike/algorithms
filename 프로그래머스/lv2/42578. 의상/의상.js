function solution(clothes) {
    var answer = {};
    clothes.forEach(ele=> answer[ele[1]] ? answer[ele[1]] +=1: answer[ele[1]] = 1) // 객체에 종류: 개수 형식으로 추가
    return Object.values(answer).reduce((acc,cur)=> (acc+1)*(cur+1)-1); // (종류의 개수+1)을 전부 곱한 후 -1을 하면 경우의 수를 구할 수 있음
}
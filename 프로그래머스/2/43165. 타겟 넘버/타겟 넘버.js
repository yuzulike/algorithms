// 재귀함수를 활용한 깊이 우선 탐색
// 재귀 함수 : 자기 자신을 호출하는 함수
function solution(numbers, target) {

    function dfs(index, sum) {
    // 배열의 마지막을 지남
    if (index === numbers.length) {
      // 현재 합이 타겟과 같으면 1을 아니면 0을 반환
      return sum === target ? 1 : 0;
    }

    // 더하기와 빼기를 각각 시도하여 모든 경우를 계산
    return dfs(index + 1, sum + numbers[index]) +
           dfs(index + 1, sum - numbers[index]);
  }
   return dfs(0, 0);
}
// dfs(1,1)+ dfs(1,-1)
// dfs(2,2)+dfs(2,0) + dfs(2,0)+dfs(2,-2)
// dfs(3,3)+dfs(3,1) + dfs(3,1)+dfs(3,-1) + dfs(3,1)+dfs(3,-1) + dfs(3,-1)+dfs(3,-3)


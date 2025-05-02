const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [M, N, K] = input[0].split(" ").map(Number);

const [a, ...position] = input;

const graph = Array.from({ length: M }, () => new Array(N).fill(0));

for (let i = 0; i < K; i++) {
  let [x1, y1, x2, y2] = position[i].split(" ").map(Number);
  for (let y = y1; y < y2; y++) {
    for (let x = x1; x < x2; x++) {
      graph[y][x] = 1;
    }
  }
}

let direction = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const visited = Array.from({ length: M }, () => new Array(N).fill(false));
const areas = [];

function dfs(sy, sx) {
  const stack = [[sy, sx]];
  visited[sy][sx] = true;
  let area = 1;
  while (stack.length > 0) {
    const [y, x] = stack.pop();
    for (let [dx, dy] of direction) {
      let newX = x + dx,
        newY = y + dy;
      if (
        newX >= 0 &&
        newY >= 0 &&
        newX < N &&
        newY < M &&
        graph[newY][newX] === 0 &&
        !visited[newY][newX]
      ) {
        visited[newY][newX] = true;
        stack.push([newY, newX]);
        area++;
      }
    }
  }
  return area;
}
for (let y = 0; y < M; y++) {
  for (let x = 0; x < N; x++) {
    if (!visited[y][x] && graph[y][x] === 0) {
      const areaSize = dfs(y, x);
      areas.push(areaSize);
    }
  }
}
console.log(areas.length);
console.log(areas.sort((a, b) => a - b).join(" "));

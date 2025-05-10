
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const laserArr = input[1].split(" ").map(Number);

const stack = [];
const answer = Array(N).fill(0);

for (let i = N - 1; i >= 0; i--) {
  while (stack.length > 0 && laserArr[stack[stack.length - 1]] <= laserArr[i]) {
    answer[stack.pop()] = i + 1;
  }
  stack.push(i);
}

console.log(answer.join(' '));

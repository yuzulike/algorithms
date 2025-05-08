
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const numList = input[1].split(" ").map(Number);

const answer = Array(N).fill(-1);
const stack = [];

for (let i = 0; i < N; i++) {
  // stack 이 변경될 때 마다 while 내부가 다시 돈다.
  while (stack.length > 0 && numList[stack[stack.length - 1]] < numList[i]) {
    answer[stack.pop()] = numList[i];
  }
  stack.push(i);
}

console.log(answer.join(" "));

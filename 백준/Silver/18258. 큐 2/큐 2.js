// 18258_큐 2
// https://www.acmicpc.net/problem/18258

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const [a, ...arr] = input;

const queue = [];
const answer = [];
let head = 0;
let tail = 0;
for (let i = 0; i < n; i++) {
  if (arr[i].startsWith("push")) {
    const [a, b] = arr[i].split(" ");
    queue.push(Number(b));
    tail++;
  }
  if (arr[i] === "front") {
    answer.push(tail === head ? -1 : queue[head]);
  }
  if (arr[i] === "back") {
    answer.push(tail === head ? -1 : queue[tail - 1]);
  }
  if (arr[i] === "empty") {
    answer.push(tail === head ? 1 : 0);
  }
  if (arr[i] === "size") {
    answer.push(tail - head);
  }
  if (arr[i] === "pop") {
    answer.push(tail === head ? -1 : queue[head]);
    if (tail !== head) head++;
  }
}

console.log(answer.join("\n"));

// 1021_ 회전하는 큐
// https://www.acmicpc.net/problem/1021

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let numList = Array.from({ length: N }, (_, i) => i + 1);

let count = 0;
for (let i = 0; i < M; i++) {
  if (arr[i] === numList[0]) {
    numList.shift();
  } else {
    const left = numList.indexOf(arr[i]);
    const right = numList.length - left;
    let repeatTime = Math.min(left, right);

    if (left <= right) {
      for (let i = 0; i < repeatTime; i++) {
        numList.push(numList.shift());
      }
    } else {
      for (let i = 0; i < repeatTime; i++) {
        numList.unshift(numList.pop());
      }
    }
    numList.shift();
    count += repeatTime;
  }
}
console.log(count);

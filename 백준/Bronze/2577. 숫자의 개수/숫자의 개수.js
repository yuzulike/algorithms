

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const A = Number(input[0]);
const B = Number(input[1]);
const C = Number(input[2]);

const multiply = String(A * B * C); // 곱한 결과
const count = new Array(10).fill(0); // 0~9 에 해당하는 배열

for (let i = 0; i < multiply.length; i++) {
  const digit = Number(multiply[i]);
  count[digit]++;
}
console.log(count.join("\n"));
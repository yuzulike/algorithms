const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

[N, list, target] = input;

let count = 0;
list.split(" ").forEach((ele) => {
  if (ele === target) {
    count++;
  }
});

console.log(count);

const fs = require("fs");
const { moveCursor } = require("readline");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M, ...list] = input;
const left = N.split("");
const right = [];

for (let order of list) {
  if (order === "L" && left.length > 0) {
    right.push(left.pop());
  } else if (order === "D" && right.length > 0) {
    left.push(right.pop());
  } else if (order === "B") {
    left.pop();
  } else if (order[0] === "P") {
    left.push(order[2]);
  }
}
console.log(left.concat(right.reverse()).join(""));

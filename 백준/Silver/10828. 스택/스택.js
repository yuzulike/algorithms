const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, ...orderList] = input;


const stack = [];
const output = [];
for (let order of orderList) {
  if (order.includes("push")) {
    const [a, b] = order.split(" ");
    stack.push(Number(b));
  }
  if (order === "top") {
    output.push(stack.length ? stack[stack.length - 1] : -1);
  }
  if (order === "size") {
    output.push(stack.length);
  }
  if (order === "empty") {
    output.push(stack.length ? 0 : 1);
  }
  if (order === "pop") {
    output.push(stack.length ? stack.pop() : -1);
  }
}
console.log(output.join("\n"));

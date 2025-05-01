const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const passwordList = input.slice(1);

for (let password of passwordList) {
  let left = [];
  let right = [];
  const arr = password.split("");
  arr.forEach((ele) => {
    if (ele === "<" && left.length > 0) {
      right.push(left.pop());
    } else if (ele === ">" && right.length > 0) {
      left.push(right.pop());
    } else if (ele === "-" && left.length > 0) {
      left.pop();
    } else if (/^[a-zA-Z0-9]$/.test(ele)) left.push(ele);
  });
  console.log(left.concat(right.reverse()).join(""));
}

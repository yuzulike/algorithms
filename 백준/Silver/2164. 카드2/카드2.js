const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

const queue = Array.from({ length: Number(input) }, (__, index) => index + 1);

let head = 0;
let tail = queue.length;

while (tail - head > 1) {
  head++; // 맨 앞 카드 버리기
  queue[tail++] = queue[head++]; // queue의 맨뒤에 앞에 카드를 삽입하기
}

console.log(queue[head]);

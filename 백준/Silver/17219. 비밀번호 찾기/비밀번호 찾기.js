const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [a, ...b] = input;

const [N, M] = a.split(" ").map(Number);

const site = b.slice(0, N);
const findSite = b.slice(N);

const pwMatch = {};
for (let address of site) {
  const [siteUrl, password] = address.split(" ");

    pwMatch[siteUrl] = password;
  
}

findSite.forEach((ele) => {
  console.log(pwMatch[ele]);
});

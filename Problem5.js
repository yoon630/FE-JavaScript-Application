//5번 문제

let user = {
  name: "예린",
  part: "FE",
};

// JSon형태
let json = JSON.stringify(user);
// console.log(json);

//다시 객체로 변환
let parsed = JSON.parse(json);

console.log(parsed);

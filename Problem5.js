//5번 문제

let user = {
  name: "예린",
  part: "FE",
};

// JSon형태
const json = JSON.stringify(user);

//다시 객체로 변환
const parsed = JSON.parsed(json);

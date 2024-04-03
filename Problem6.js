// 6번 문제

let arr = [
  { part: "fe", name: "홍현", age: 26 },
  { part: "fe", name: "애리", age: 24 },
  { part: "fe", name: "나연", age: 23 },
  { part: "staff", name: "나현", age: 24 },
];

//6-1번
newArr = arr.filter((value) => value.part != "staff");
console.log(newArr);

//6-2번
newArr.sort((a, b) => b.age - a.age);
console.log(newArr);

//6-3번
upperArr = newArr.map((value) => {
  return { ...value, part: value.part.toUpperCase() };
});
console.log(upperArr);

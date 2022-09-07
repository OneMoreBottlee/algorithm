const input = require("fs").readFileSync("예제.txt").toString().split(" ");

let n = input[0];

function hansu(n) {
  // 한수값 찾기
  const stringNumber = String(n);
  let sumBox = [];
  let result = 0;

  for (let i = 0; i < stringNumber.length; i++) {
    sumBox.push(stringNumber[i]);
  }

  for (let i = 0; i < sumBox.length - 2; i++) {
    if (
      Number(sumBox[i]) - Number(sumBox[i + 1]) ===
      Number(sumBox[i + 1]) - Number(sumBox[i + 2])
    ) {
      result = sumBox[i] + sumBox[i + 1] + sumBox[i + 2];
    }
  }
  return result;
}

function hansuCounter(n) {
  if (n < 100) {
    return console.log(n);
  }
  let range = n;
  let count = 99;

  for (let i = 0; i <= range; i++) {
    if (hansu(i) > 0) {
      count++;
    }
  }
  console.log(count);
}

hansuCounter(n);
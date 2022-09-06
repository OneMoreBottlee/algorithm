function d(n) {  // 생성자 구하기
  const stringNumber = String(n);
  let sumBox = [];
  let result = n;

  for (let i = 0; i < stringNumber.length; i++) {
    sumBox.push(stringNumber[i]);
  }

  for (let i = 0; i < sumBox.length; i++) {
    result += Number(sumBox[i]);
  }

  return result;
}

function selfNumber(n) {    // n개의 배열을 만들고, 생성자가 있으면 false, selfNumber면 true, true인 값만 뽑기
  let range = n;
  let findSelfNum = Array(range + 1).fill(true);

  for (let i = 0; i <= range; i++) {
    findSelfNum[d(i)] = false;
  }

  for (let i = 0; i < range; i++) {
    if (findSelfNum[i]) {
      console.log(i);
    }
  }
}

selfNumber(10000);

// 하나의 함수에 넣어서 처리해도 좋을듯?
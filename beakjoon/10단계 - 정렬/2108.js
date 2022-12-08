const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");
const N = input[0];

let box = input.slice(1, input.length);
box.sort((a, b) => a - b);

//산술평균
let sum = 0;
for (let i = 0; i < N; i++) {
  sum += Number(box[i]);
}
sum = Math.round(sum / N);
if (sum === -0) {
  sum = 0;
}
console.log(sum);

//중앙값
let middleValue = Math.floor(N / 2);
console.log(Number(box[middleValue]));

//최빈값
function mostValue(arr){
  const map = new Map();
  let max = 1;
  for (let number of arr) {
    if (map.has(number)) {
      max = Math.max(max, map.get(number) + 1);
      map.set(number, map.get(number) + 1);
    } else map.set(number, 1);
  } // map 자료구조를 통해 숫자 별 빈도수 기록
  
  const maxArr = [];
  for (let [key, val] of map) {
    if (val === max) maxArr.push(key);
  } // maxArr 배열에 최빈값 후보에 해당하는 모든 원소를 넣어준다.
  
  let result = '';
  result += maxArr.length === 1 ? `${maxArr[0]}` : `${maxArr[1]}`;
  // 최빈값이 여러개면 두번째로 작은 값, 1개라면 최빈값.
  return result;
}

console.log(mostValue(box))


//최빈값
// function getSortedArr(array) {
//   // 1. 출연 빈도 구하기
//   const counts = array.reduce((pv, cv) => {
//     pv[cv] = (pv[cv] || 0) + 1;
//     return pv;
//   }, {});

//   // 2. 요소와 개수를 표현하는 배열 생성 => [ [요소: 개수], [요소: 개수], ...]
//   const result = [];
//   for (let key in counts) {
//     result.push([Number(key), counts[key]]);
//   }

//   // 3. 출현 빈도별 정리하기
//   result.sort((first, second) => {
//     // 정렬 순서 바꾸려면 return first[1] - second[1];
//     return second[1] - first[1];
//   });
//   return result;
// }

// if (box.length === 1) {
//   console.log(Number(box[0]));
// } else if (getSortedArr(box)[0][1] === getSortedArr(box)[1][1]) {
//   let ab = getSortedArr(box).filter((e) => e[1] === getSortedArr(box)[0][1]);
//   let result = []
//   for(let key of ab){
//     result.push(key[0])
//   }
//   result.sort((a,b)=>a-b)
//   console.log(result[1]);
// } else {
//   console.log(getSortedArr(box)[0][0]);
// }

//범위
console.log(box[N - 1] - box[0]);
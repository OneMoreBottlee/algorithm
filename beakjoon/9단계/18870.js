const input = require('fs').readFileSync('예제.txt').toString().trim().split('\n');
let box = input[1].split(' ').map(e => Number(e))

let setBox = new Set(box)
let uniq = [...setBox].sort((a,b) => a - b);

let objBox = {};
uniq.forEach((e, index) => {objBox[e] = index})

let result = '';
for(let i = 0; i < box.length; i++) {
    result += objBox[box[i]] + ' ';
}

console.log(result);

// 2번풀이 => 공간
// let setBox = new Set(box)

// let result = ''
// for(let i = 0; i < box.length; i++){
//     result += [...setBox].filter(a => a < Number(box[i])).length + ' '
// }
// console.log(result)

// 1번 풀이 => 시공간
// let box2 = []
// for(let i = 0; i < box.length; i++){
//     if(box2.includes(box[i])){
//         continue
//     }else{
//         box2.push(box[i])
//     }
// }

// let result = ''
// for(let i = 0; i < box.length; i++){
//     result += box2.filter(a => a < Number(box[i])).length + ' '
// }

// console.log(result)
//만약 정확한 값이 필요 없고 값의 대소 관계만 필요하다면, 모든 수를 0 이상 N 미만의 수로 바꿀 수 있습니다.
//딕셔너리 이분탐색

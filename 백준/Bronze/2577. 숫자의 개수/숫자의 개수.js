const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n')

// 1번 arr 인풋값을 곱한 결과값을 자릿수로 구분
let arr = input.reduce((acc,cur) => acc * cur).toString().split('')

// 2번 arr 0~9까지 값을 확인할 새로운 배열
let arr2 = new Array(10).fill(0)

// 1번 arr의 각 요소를 확인하고 2번 arr에 카운트
arr.forEach((el)=> {
    arr2[el] ? arr2[el] += 1 : arr2[el] = 1
  })

let result = arr2.join('\n')

console.log(result)
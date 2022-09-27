// js는 메모리 초과로 해결 불가
// 계수 정렬 Counting sort
// 배열 내 요소 개수 카운팅하는 countArr 생성
// countArr의 내용을 요소합으로 변경
// input 배열의 뒤부터 하나씩 확인하고 countArr 값 변경, output 배열 값 추가

// ex) input = [0,3,0,4,4,2,2,5,5,0,1,1,3,2,1,2]
// ex) countArr = [3,3,4,2,2,2]

// 요소합으로 변경
// ex) input = [0,3,0,4,4,2,2,5,5,0,1,1,3,2,1,2]
// ex) countArr = [3,6,10,12,14,16]

// input 마지막 요소부터 확인하고 output 추가
// ex) input = [0,3,0,4,4,2,2,5,5,0,1,1,3,2,1,]
// ex) countArr = [3,6,9,12,14,16]
// ex) output = [,,,,,,,,,2,,,,,,]

// ex) input = [0,3,0,4,4,2,2,5,5,0,1,1,3,2,,]
// ex) countArr = [3,5,9,12,14,16]
// ex) output = [,,,,,1,,,,,2,,,,,,]

// ex) input = [0,3,0,4,4,2,2,5,5,0,1,1,3,,,]
// ex) countArr = [3,5,8,12,14,16]
// ex) output = [,,,,,1,,,,2,2,,,,,,]

// ex) input = [0,3,0,4,4,2,2,5,5,0,1,1,,,,]
// ex) countArr = [3,5,8,11,14,16]
// ex) output = [,,,,,1,,,,2,2,,,3,,,]

// ex) input = [0,3,0,4,4,2,2,5,5,0,,,,,,]
// ex) countArr = [3,3,8,11,14,16]
// ex) output = [,,,1,1,1,,,2,2,,,3,,,]

// ex) input = [0,3,0,4,4,2,2,5,5,,,,,,,]
// ex) countArr = [2,3,8,11,14,16]
// ex) output = [,,0,1,1,1,,,2,2,,,3,,,]

// ex) input = [0,3,0,4,4,2,2,,,,,,,,,]
// ex) countArr = [2,3,8,11,14,14]
// ex) output = [,,0,1,1,1,,,2,2,,,3,,5,5]

// ex) input = [0,3,0,4,4,,,,,,,,,,,]
// ex) countArr = [2,3,6,11,14,14]
// ex) output = [,,0,1,1,1,2,2,2,2,,,3,,5,5]

// ex) input = [0,3,0,,,,,,,,,,,,,]
// ex) countArr = [2,3,6,11,12,14]
// ex) output = [,,0,1,1,1,2,2,2,2,,3,4,4,5,5]

// ex) input = [0,3,,,,,,,,,,,,,,]
// ex) countArr = [1,3,6,11,12,14]
// ex) output = [,0,0,1,1,1,2,2,2,2,,3,4,4,5,5]

// ex) input = [0,,,,,,,,,,,,,,,]
// ex) countArr = [1,3,6,10,12,14]
// ex) output = [,0,0,1,1,1,2,2,2,2,3,3,4,4,5,5]

// ex) input = [,,,,,,,,,,,,,,,]
// ex) countArr = [0,3,6,10,12,14]
// ex) output = [0,0,0,1,1,1,2,2,2,2,3,3,4,4,5,5]

// 이런 방식으로 시간복잡도 O(N)으로 만들어진다...!
// https://www.cs.miami.edu/home/burt/learning/Csc517.091/workbook/countingsort.html



const input = require('fs').readFileSync('예제.txt').toString().trim().split('\n');

const box = input.slice(1,input.length)
box.sort((a,b)=>a-b)
console.log(box.join('\n'))
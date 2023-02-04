const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ")

const n = input[0] * 1
const k = input[1] * 1

const arr = []
for (let i = 2; i <= n; i++) arr.push(i)

let count = 0
let nthNum = 0

while (count < k) {
    let startNum = arr[0]
    
  	// 해당 값이 있는지 확인
    arr.some(num => {
      	// 배수 찾고 삭제
        if (num % startNum === 0) {
            arr.splice(arr.indexOf(num), 1)
            nthNum = num
            count++;
        }

      	// 소수인 수
        if (count === k) return true
    })
}

console.log(nthNum)
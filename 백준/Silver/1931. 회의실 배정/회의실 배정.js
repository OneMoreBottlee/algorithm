const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').slice(1).map(el => el.split(" ").map(ele=>+ele))

// 정렬 기준 1) 종료 시간 2) 시작 시간
input.sort((a,b) => {return a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]})

console.log(solution(input))

function solution(arr){ 
	let count = 1
    let temp = arr[0][1]
    
    // 종료 시간과 시작 시간을 비교해 temp 변경 && 카운트
    for(let i = 1; i < arr.length; i++){
        if(temp <= arr[i][0]){
        temp = arr[i][1];
        count++
        }
    }
    
    return count
}
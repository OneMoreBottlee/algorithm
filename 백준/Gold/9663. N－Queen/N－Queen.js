const N = require("fs").readFileSync("/dev/stdin").toString().trim()*1
const queens = []

function possible(x,y){
  for (let [a,b] of queens){
    if(a === x || b === y) return false // 행이나 열이 같은 경우
    if(Math.abs(a-x) === Math.abs(b-y))return false // 대각선에 위치한 경우
  }
  return true
}

let count = 0

function dfs(row) {
  if(row === N) count += 1 // 퀸을 행당 1개씩 N개 배치
  
  for(let i = 0; i < N; i++){ // 현재 행에 존재하는 열을 확인하면서
    if(!possible(row, i))continue // 현재 위치에 놓을 수 없다면 무시
    queens.push([row, i]) // 현재 위치에 퀸을 놓기
    dfs(row + 1) // 재귀 함수 호출
    queens.pop() // 현재 위치에서 퀸을 제거하기
  }
}

dfs(0)
console.log(count)
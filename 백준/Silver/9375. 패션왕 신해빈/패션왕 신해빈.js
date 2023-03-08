const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const n = input[0]
const clothes = input.slice(1)

// 테스트 케이스별로 분류하기
const testCase = []
while(testCase.length < n){
    let num = clothes[0]*1
    testCase.push(clothes.splice(0, num+1))
}

// 테스트 케이스별 계산
function solution (arr) {
    const clothes = arr.slice(1)
    const match = {}
    
    // {의상 파트별 : 개수}
    clothes.forEach(el => {
        const devide = el.split(" ")
        const name = devide[0]
        const wear = devide[1]

        // 파트별 종류의 개수 체크
        match[wear] ? match[wear] += 1 : match[wear] = 1
    })
    
    // 입을 수 있는 경우의 수 = 의상 파트별 경우의 수를 모두 곱함
    const result = Object.values(match).reduce((acc,cur) => acc*(cur+1),1)
    
    // 모두 안 입는 경우 빼기
    return result-1
}

console.log(testCase.reduce((acc,cur) => acc + solution(cur) + "\n",""))
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ')
const trees = input[1].split(" ").map(el => el*1)
let max = Math.max(...trees)

function solution (m, trees) {
    let min = 0
    let answer = 0
    
    while(min <= max){
        let mid = Math.floor((min + max) / 2)
        let cutWood = 0
        
        trees.forEach(el => {
            if(el-mid > 0) cutWood += el-mid
        })

        if(cutWood >= m){
            if(mid > answer)answer = mid
            min = mid+1
        }else{
            max = mid-1
        }
    }

    return answer
}

console.log(solution(m*1,trees))
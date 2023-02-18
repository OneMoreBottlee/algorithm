const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const N =input[0]*1

const solution = (num) => {
    let result = false
	let count = 0
    
    while(!result){
        let add = 0
        const str = count+""
        
        // 탈출
        if(count + add >= num)break
        
        // 분해합
        for(let i = 0; i < str.length; i++){
            add += str[i]*1
        }
        
        // 확인
        if(count + add === num){
            result = true
        }
        count++
    }

    return result ? count-1 : 0
}

console.log(solution(N))
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, ...arr] = input
const Arr = arr.map(el => el*1)

const solution = (n, arr) => {
    const stack = []
    let count = 0
    let result = ""
    
    for(let i = 0; i<n; i++){
        const idxNum = arr[i]
        while(count < idxNum*1){
            count++
            stack.push(count)
            result += "+"
        }

        const popValue = stack.pop()

        if(popValue !== idxNum){
            return "NO"
        }
        
        result += "-"
    }
    return result.split("").join('\n')
}

console.log(solution(N, Arr))
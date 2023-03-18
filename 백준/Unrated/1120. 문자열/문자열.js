const [front, back] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

function solution(front, back){
    const difLength = back.length - front.length
    let difCount = front.length
    
    for(let i = 0; i <= difLength; i++){
        let eachCount = 0
        for(let j = i; j < front.length + i; j++){
            if(front[j-i] !== back[j])eachCount++
        }
        if(eachCount < difCount)difCount = eachCount
    }
    
    return difCount
}

console.log(solution(front, back))
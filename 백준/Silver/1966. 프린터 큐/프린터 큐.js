const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = input[0]
const arr = input.slice(1)
const infomation = []
const print = []

for(let i = 0; i < arr.length; i+=2){
    infomation.push(arr[i].split(" ").map(el=>el*1))
    print.push(arr[i+1].split(" ").map(el=>el*1))
}

function queue (arrA, arrB){
    const Q = []
    let idxNumber = arrB[arrA[1]]
    let idx = arrA[1]
    let count = 0
    
    while(arrB.length > 0){
        const del = arrB.shift()
        if(del >= Math.max(...arrB)){
            Q.push(del)
            count++
            if(del === idxNumber && idx === 0)return count
            else{idx -= 1}
        }else{
            arrB.push(del)
            if(idxNumber === del && idx === 0)idx = arrB.length-1
            else{idx -= 1}
        }
    }
}

let result = ""

for(let i = 0; i < n; i++){
    result += queue(infomation[i], print[i]) + "\n"
}

console.log(result.slice(0, result.length-1))
const [arr1, arr2] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = arr1.split(" ").map(Number)
const arr = arr2.split(" ").map(Number)

let queue = []

for(let i = 0; i < N; i++){
    queue.push(i+1)
}

let count = 0

for(let i = 0; i < M; i++){
    const task = arr[i]
    const idx = queue.indexOf(task)
    let mid = Math.floor(queue.length/2)

    if(idx !== 0){
        if(idx > mid){
            const rest = queue.splice(idx, queue.length-1)
            queue = [...rest, ...queue]
            count += queue.length - idx
        }else{
            const rest = queue.splice(0, idx)
            queue = [...queue, ...rest]
            count += idx
        }
    }

    queue.shift()
}

console.log(count)
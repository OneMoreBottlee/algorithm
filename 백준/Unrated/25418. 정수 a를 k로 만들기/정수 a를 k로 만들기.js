let [a, k] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let count = 0

while(a < k){
    if(k%2 === 0 && k/2 >= a){
        k = k/2
    }else{
        k -= 1
    }
    count++
}

console.log(count)
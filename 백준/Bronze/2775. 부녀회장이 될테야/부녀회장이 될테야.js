const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n")
let result = []

for(let i = 1; i < input.length; i += 2){
    result.push([input[i]*1, input[i+1]*1])
}

function ad (k, n) {
    let a = []
    for(let i = 0; i <= k; i++){
        a.push([])
        for(let j = 0; j < n; j++){
            if(i === 0)a[0].push(j+1)
            else{
                if(j === 0){a[i].push(1)}
                else{
                    a[i].push(a[i][j-1]*1 + a[i-1][j]*1)
                }
            }
        }
    }
    console.log(a[k*1][n*1-1])
}

result.forEach(el => ad(el[0], el[1]))
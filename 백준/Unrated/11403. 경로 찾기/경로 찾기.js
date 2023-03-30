const [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input.map(el => el.split(" ").map(Number))

function floydWarshall (N, matrix){
    for(let k = 0; k < N; k++){
        for(let i = 0; i < N; i++){
            for(let j = 0; j < N; j++){
                if(matrix[i][k] && matrix[k][j]){
                    matrix[i][j] = 1
                }
            }
        }
    }

    return matrix.map(el => el.join(" ")).join("\n")
}

console.log(floydWarshall(n*1, arr))
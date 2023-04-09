const [N,r,c] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number)

let count = 0

const recursion = (row, col, size) => {
    if(row === r && col === c){
        console.log(count)
        return 
    }

    if(r >= row && r < row + size && c >= col && c < col + size){
        size = parseInt(size / 2)
        recursion(row, col, size) // 좌상단
        recursion(row, col + size, size) // 우상단
        recursion(row + size, col, size) // 좌하단
        recursion(row + size, col + size, size) // 우하단
    }else{
        count += size * size
    }
}

recursion(0, 0, Math.pow(2, N))
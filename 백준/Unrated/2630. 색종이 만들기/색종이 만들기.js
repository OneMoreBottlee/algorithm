const [number, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")

const paper = arr.map(el => el.split(" ").map(Number))

function solution(n, paper){
    let white = 0
    let blue = 0

    function check(x, y, length){
        let count = 0

        for(let i = x; i < x + length; i++){
            for(let j = y; j < y + length; j++){
                if(paper[i][j])count++
            }
        }

        if(!count){
            white++
        }else if(count === length * length){
            blue++
        }else{
            check(x,y,length/2)
            check(x,y+length/2, length/2)
            check(x+length/2,y,length/2)
            check(x+length/2,y+length/2,length/2)
        }
    }

    check(0, 0, n)

    return [white, blue]
}

console.log(solution(number, paper).join("\n"))
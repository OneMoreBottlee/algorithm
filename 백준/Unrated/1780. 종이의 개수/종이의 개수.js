const [number, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
const paper = arr.map(el => el.split(" ").map(Number))

function solution(n, paper){
    // -1, 0, 1 로 채워진 종이 개수를 카운트할 배열
    const count = [0,0,0]

    function recursion(x, y, length){
        // 기준값 (-1, 0, 1)
        const value = paper[y][x]
        let check = 0

        // 모든 요소를 돌면서 기준값과 같으면 체크
        for(let i = 0; i < length; i++){
            for(let j = 0; j < length; j++){
                if(paper[y+j][x+i] === value)check++
            }
        }

        // 체크한 값이 length의 제곱이면 해당 종이가 모두 기준값으로 채워져있는 경우이다. 배열에 해당 기준값의 종이 개수를 추가한다.
        if(check === length * length){
            count[value+1]++
        }else{
            // 그렇지 않은 경우 종이를 9등분해 다시 확인한다.
            length /= 3
            for(let i = 0; i < 3 ; i++){
                for(let j = 0; j < 3; j++){
                    recursion(x+i*length, y+j*length, length)
                }
            }
        }
    }

    recursion(0, 0, n)

    // 카운트한 배열을 리턴
    return count
}

console.log(solution(number*1, paper).join("\n"))
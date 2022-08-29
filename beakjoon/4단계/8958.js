const input = require("fs").readFileSync("예제.txt").toString().split("\n");

const index = Number(input[0]);

for (let i = 1; i <= index; i++) {
    let count = 0;
    let addCount = 0;

    for (let j = 0; j < input[i].length; j++) {
        if(input[i][j] === "O"){
            count++
        }else{
            count = 0
        }
        addCount += count
    }
    console.log(addCount);
}
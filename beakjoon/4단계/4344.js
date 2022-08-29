const input = require("fs").readFileSync("예제.txt").toString().split("\n");

const C = Number(input[0])

for(let i = 1; i <= C; i++){
    let a = input[i].split(" ")
    let sum = 0;
    let count = 0;
    for(let j = 1; j <= Number(a[0]); j++){
        sum += Number(a[j])
        // console.log(sum)
    }
    let avg = sum / Number(a[0]);
    for(let j = 1; j <= Number(a[0]); j++){
        if(Number(a[j])>avg){
            count++
        }
    }
    result = ((count/a[0])*100).toFixed(3)  // 소숫점
    console.log(result+"%")
}
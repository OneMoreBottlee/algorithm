const input = require('fs').readFileSync('예제.txt').toString().split('\n');

let totalPrice = Number(input[0])

for(let i = 2; i <= Number(input[1])+1; i++){
    let price = Number(input[i].split(' ')[0])
    let many = Number(input[i].split(' ')[1])
    totalPrice = totalPrice - (price * many)
}

if(totalPrice === 0){
    return console.log("Yes")
}else{
    return console.log("No")
}
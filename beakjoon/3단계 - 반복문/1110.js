const input = require('fs').readFileSync('예제.txt').toString().split(' ');

let num = input[0];
let sum;
let count = 0;

while(Number(input[0]) !== num){
    count++;
    sum = Math.floor(num/10) + num % 10; //8
    num = (num % 10) * 10 + sum % 10;
}

console.log(count);

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = input[0]
let box = input.slice(1, N + 1)
let box2 = [];
for(key of box){
    box2.push([key.split(' ')[0], key.split(' ')[1]])
}
box2.sort((a,b) => a[0] - b[0])

result = ''
for(let key of box2){
    result += key[0] + ' ' + key[1] +`\n`
}

console.log(result)
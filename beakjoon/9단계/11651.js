const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = input[0]

let box = input.slice(1, N+1)
let realBox = []
for(let key of box){
    realBox.push(key.split(' '))
}
realBox.sort((a,b)=> {
    if(a[1] === b[1]){return a[0] - b[0]}
    else{return a[1] - b[1]}
})
let result = ''
for(let key of realBox){
    result += key[0] + ' ' + key[1] +`\n`
}
console.log(result)

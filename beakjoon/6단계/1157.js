const input = require("fs").readFileSync("예제.txt").toString().trim().split(" "); // trim...
const str = input[0].toUpperCase();

let box = {}
for(let i = 0; i < str.length; i++){
    if(Object.keys(box).includes(str[i])){
        box[str[i]] += 1
    }else{
        box[str[i]] = 1
    }
}

let count = 0
let result = ''

for(let key in box){
    let countt = box[key]
    if(countt > count){
        count = countt
        result = key
    }else if(countt < count){
        result
    }else{
        result = '?'
    }
}

console.log(result)
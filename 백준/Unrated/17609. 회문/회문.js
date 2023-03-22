const [t, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

console.log(input.map(el => solution(el)).join('\n'));

function solution(str){
    let result
    let out = false
    if(palindrome(str))return 0
  	else{
        let start = 0
        let end = str.length-1
        
        while(start < end){
            if(str[start] !== str[end]){
            if(palindrome(str.slice(start+1, end+1)))out = true
            if(palindrome(str.slice(start, end)))out = true
            break
            }
            start++
            end--
        }
    }
    return out ? 1 : 2
}

function palindrome(str) {
    return str === str.split("").reverse().join("")
}
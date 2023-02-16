const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const A = input[0]*1
const B = input[1]*1

function AB (a,b){
    let count = 1 
    
    while(a < b){
      // 짝수
      if(b % 2 === 0){
        b = b/2
        count++
        
      }else{ //홀수
        b = b.toString()
        b[b.length-1] === "1" ? (b = b.slice(0,b.length-1)*1, count++) : (a=b, count=-1)
      }      
    }
  
	if(a > b)count=-1
    return count
}

console.log(AB(A,B))
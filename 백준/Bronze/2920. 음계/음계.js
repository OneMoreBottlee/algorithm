const input = require('fs').readFileSync('/dev/stdin').toString().trim()
let result =""
if(input === "1 2 3 4 5 6 7 8"){result = "ascending"}
else if(input === "8 7 6 5 4 3 2 1"){result= "descending"}
else{result = "mixed"}

console.log(result)
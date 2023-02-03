const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map((el) => el.trim().split(" ")).slice(1);
input.forEach((el) => {
    let result = ""
    let lastValue = Math.ceil(el[2] / el[0])
    let firstValue = (el[2] % el[0])
    
    if(firstValue === 0){firstValue = el[0]}
    
    if(lastValue*1 >= 10){
        result = firstValue + "" + lastValue
    }else{
        result = firstValue + "0" + lastValue
    }

    console.log(result*1)
});
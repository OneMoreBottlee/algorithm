function solution(polynomial) {
    let x = 0;
    let number = 0;

  	polynomial.split(" + ").forEach(el => {
      if(el.includes("x")){
        const xValue = el.replace("x", "")
        x += (xValue === "") ? 1 : xValue*1
      }else{number += el*1}
    })
  
  	const bridge = (x === 0 || number === 0) ? "" : " + "
    x = x === 0 ? "" : x === 1 ? "x" : `${x}x`
    number = number === 0 ? "" : number
    return x + bridge + number
}
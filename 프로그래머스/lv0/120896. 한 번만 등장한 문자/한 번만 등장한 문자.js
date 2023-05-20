function solution(s) {
    const check = {}
    
    for(let abc of s){
        check[abc] !== undefined ? check[abc]++ : check[abc] = 0
    }
  
  	const key = Object.keys(check)
    
    return key ? key.filter(el => check[el] === 0).sort().join("") : ""
}
function solution(k, m, score) {
  	const appleBox = score.sort((a,b)=>b-a)
    const appleBoxes = []
    
    for(let i = 0; i < score.length; i+=m){
      	const box = appleBox.slice(i, i+m)
        if(box.length < m)break;
        const price = Math.min(...box) * m
      	appleBoxes.push(price)
    }
  
    return appleBoxes.reduce((acc,cur)=>acc+cur,0)
}
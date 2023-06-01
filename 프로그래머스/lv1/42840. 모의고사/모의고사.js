function solution(answers) {
  	const aMan = [1,2,3,4,5]
    const bMan = [2,1,2,3,2,4,2,5]
    const cMan = [3,3,1,1,2,2,4,4,5,5]
    
    const points = [0, 0, 0]
    
    answers.forEach((el, idx) => {
      if(el === aMan[idx % aMan.length])points[0]++
      if(el === bMan[idx % bMan.length])points[1]++
      if(el === cMan[idx % cMan.length])points[2]++
    })
  	
  	const topScore = Math.max(...points)
  
    return points.reduce((acc, cur, idx) => 
      cur === topScore ? [...acc, idx+1] : acc
    ,[])
}
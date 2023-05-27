function solution(rank, attendance) {
  	const result = rank.reduce((acc, cur, index) => {
      return attendance[index] ? [...acc, [index, cur]] : acc
    }, []).sort((a,b)=>a[1]-b[1])
    
    return result[0][0]*10000 + result[1][0]*100+ result[2][0]
}
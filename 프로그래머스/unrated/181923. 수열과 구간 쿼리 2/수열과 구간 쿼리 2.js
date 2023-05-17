function solution(arr, queries) {
  	    return queries.reduce((acc, cur) => {
          const range = arr.slice(cur[0], cur[1]+1)
          const bigger = range.filter(el => el > cur[2])
          if(!bigger.length)return [...acc, -1]
          return [...acc, Math.min(...bigger)]
        }, [])
  
    // return queries.map(el => arr.slice(el[0], el[1]+1)
    //                    .filter(ele => ele > el[2])
    //                    .sort()[0] ?? -1)  
}
function solution(arr, queries) {
    return queries.map(([s, e, k]) => {
      const range = arr.slice(s, e+1)
      const bigger = range.filter(ele => ele > k)
      
      if(!bigger.length)return -1
      return Math.min(...bigger)
      })  
}
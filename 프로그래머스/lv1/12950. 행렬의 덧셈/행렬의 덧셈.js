function solution(arr1, arr2) {
    return arr1.map((arr,index) => {
      return arr.map((el,idx) => {
        return el + arr2[index][idx]
      })
    })
}
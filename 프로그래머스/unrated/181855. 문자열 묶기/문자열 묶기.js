function solution(strArr) {
    return Math.max(...strArr.reduce((acc, cur) => {
      acc[cur.length] === undefined ? acc[cur.length] = 1 : acc[cur.length] += 1
      return acc
    }, [0]))
}
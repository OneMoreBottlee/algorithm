function solution(X, Y) {
  	// X, Y 요소의 등장 횟수를 각각 카운팅하는 객체 생성
    const [xObj, yObj] = [{}, {}]

    X.split("").forEach(num => {
      xObj[num] === undefined ? xObj[num] = 1 : xObj[num]++
    })

    Y.split("").forEach(num => {
      yObj[num] === undefined ? yObj[num] = 1 : yObj[num]++
    })

  	// 중복 횟수를 확인할 객체 생성
    const concatObj = {}

    Object.entries(xObj).forEach(([key, value]) => {
      if(yObj[key] !== undefined) concatObj[key] = Math.min(value, yObj[key])
    })

  	// 중복 객체를 문자열로 전활할 배열
    let concatArr = []

    Object.entries(concatObj).forEach(([key,value]) => {
      for(let i = 0; i < value; i++){
        concatArr.push(key)
      }
    })

  	// 크기순으로 정렬
    concatArr.sort((a,b) => b-a)

    if(concatArr.length === 0) return "-1"
    else if(concatArr[0] === "0") return "0"
    return concatArr.join("")
}
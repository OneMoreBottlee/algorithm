function solution(n, arr1, arr2) {
  	// 주어진 숫자를 지도로 변환한다.
  	const Amap = arr1.map(el => el.toString(2))
    const Bmap = arr2.map(el => el.toString(2))
    
    const result = Amap.map((el, index) => {
      	// 두 배열의 요소를 합쳐 벽과 공백을 최신화한다.
        const sumMap = String(el*1 + Bmap[index]*1)
        
        // 최신 지도 앞부분이 0일 경우 발생하는 공백을 방지한다.
        const secretWord = "0".repeat(n-sumMap.length)+sumMap
        return secretWord.replace(/[1-9]/g, "#").replace(/[0]/g," ")
    })
    
    return result
}
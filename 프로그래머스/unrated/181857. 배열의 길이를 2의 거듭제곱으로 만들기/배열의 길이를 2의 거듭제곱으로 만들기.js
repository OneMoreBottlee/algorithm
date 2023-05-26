function solution(arr) {
    const arrLen = arr.length
    
    let idx = 0
    
    while(arrLen > Math.pow(2, idx)){
      idx++
    }

	const zeroArr = Array(Math.pow(2, idx)).fill(0)

    return [...arr, ...zeroArr.slice(0, Math.pow(2, idx) - arrLen)]
}
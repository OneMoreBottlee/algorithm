function solution(arr) {
    let minNumber = Math.min(...arr)
    let result = arr.filter(el=>el!==arr[arr.indexOf(minNumber)]) 
    return result.length ? result : [-1]
}
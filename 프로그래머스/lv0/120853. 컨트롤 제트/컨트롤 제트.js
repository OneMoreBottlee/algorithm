function solution(s) {
    const arr = s.split(" ")
    let result = 0
    
    for(let i = 0; i < arr.length; i++){
        const number = arr[i]
        if(number === "Z"){
            result -= arr[i-1]*1
        }else{
            result += arr[i]*1
        }
    }
    
    return result
}
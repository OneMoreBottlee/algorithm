function solution(my_str, n) {
    const result = []
    for(let i = 0; i < my_str.length; i+=n){
      result.push(my_str.slice(i, i+n))
    }
    return result
}
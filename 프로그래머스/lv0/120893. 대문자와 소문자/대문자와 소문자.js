function solution(my_string) {
    let result = ""

    for(let i = 0; i < my_string.length; i++){
        const word = my_string[i]
        result += (word === word.toUpperCase()) ? word.toLowerCase() : word.toUpperCase()
    }
  
    return result
}
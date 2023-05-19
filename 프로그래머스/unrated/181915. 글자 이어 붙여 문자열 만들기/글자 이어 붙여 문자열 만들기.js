function solution(my_string, index_list) {
    let result = ""
    
    for(let index of index_list){
        result += my_string[index]
    }
    
    return result
}
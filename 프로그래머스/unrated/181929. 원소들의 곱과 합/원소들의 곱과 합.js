function solution(num_list) {
    let sum = 0
    let multiply = 1
    
    for(let i = 0; i < num_list.length; i++){
        sum += num_list[i]
        multiply *= num_list[i]
    }
    
    return multiply < sum**2 ? 1 : 0
}
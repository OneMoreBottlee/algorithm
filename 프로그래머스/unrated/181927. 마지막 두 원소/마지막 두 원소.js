function solution(num_list) {
    const lastNumber = num_list[num_list.length-1]
    const beforeLastNumber = num_list[num_list.length-2]
    
    lastNumber > beforeLastNumber ? num_list.push(lastNumber-beforeLastNumber) : num_list.push(lastNumber*2)
    return num_list
}
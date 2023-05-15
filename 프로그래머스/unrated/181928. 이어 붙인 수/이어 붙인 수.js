function solution(num_list) {
    let odd = ""
    let even = ""
    
    for(let i = 0; i < num_list.length; i++){
        const number = num_list[i]
        number % 2 ? odd += number : even += number
    }
    
    return odd*1 + even*1
}
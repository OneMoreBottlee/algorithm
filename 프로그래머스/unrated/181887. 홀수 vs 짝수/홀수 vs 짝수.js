function solution(num_list) {
    let odd = 0;
    let even = 0;
    
    for(let i = 0; i < num_list.length; i++){
        const number = num_list[i]
        
        i % 2 === 0 ? even += number : odd += num_list[i]
    }

    return odd >= even ? odd : even
}
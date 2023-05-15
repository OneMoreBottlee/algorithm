function solution(numbers, k) {
    let pitcher = 0
    
    for(let i = 0; i < k-1; i++){
        pitcher += 2
        
        if(pitcher > numbers.length-1){
            pitcher -= numbers.length
        }
    }
    
    return numbers[pitcher]
}
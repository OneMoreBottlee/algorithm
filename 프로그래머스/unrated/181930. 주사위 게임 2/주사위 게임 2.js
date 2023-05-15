function solution(a, b, c) {
    let result = 0
    
    if(a===b && a===c && b===c){
        result = (a + b + c)*(a**2 + b**2 + c**2)*(a**3 + b**3 + c**3)
    }else if(a!==b && a!==c && b!==c){
        result = a + b + c
    }else{
        result = (a + b + c)*(a**2 + b**2 + c**2)
    }

    return result;
}
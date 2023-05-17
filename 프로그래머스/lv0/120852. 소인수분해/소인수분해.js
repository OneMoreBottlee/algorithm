function solution(n) {
    const result = []
    if(n%2 === 0)result.push(2)
    for(let i = 3; i <= n; i += 2){
        if(n%i === 0 && checkPrime(i)){
            n = n / i
            result.push(i)
        }
    }
    return result;
}

const checkPrime = (n) => {
    if(!n || n === 1)return false
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0)return false
    }
    return true
}
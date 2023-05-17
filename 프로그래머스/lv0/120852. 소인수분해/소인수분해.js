function solution(n) {
    const result = []
    for(let i = 2; i <= n; i++){
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
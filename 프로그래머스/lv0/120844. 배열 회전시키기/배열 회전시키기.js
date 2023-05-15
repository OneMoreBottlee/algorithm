function solution(numbers, direction) {
    if(direction === "right"){
        const add = numbers.pop()
        numbers.unshift(add)
    }else{
        const add = numbers.shift()
        numbers.push(add)
    }
    return numbers
}
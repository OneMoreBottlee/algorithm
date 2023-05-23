function solution(numbers) {
    numbers.sort((a,b)=>b-a)
    const plus = numbers[0] * numbers[1]
    const minus = numbers[numbers.length-1] * numbers[numbers.length-2]
    return plus > minus ? plus : minus
}
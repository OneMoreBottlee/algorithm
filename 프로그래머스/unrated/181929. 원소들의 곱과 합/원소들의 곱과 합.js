function solution(num_list) {
    const sum = num_list.reduce((acc, cur) => acc+cur, 0)**2
    const multiply = num_list.reduce((acc, cur) => acc*cur, 1)
    return multiply < sum ? 1 : 0
}
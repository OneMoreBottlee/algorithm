function solution(num_list) {
    const sum = num_list.reduce((acc,cur) => acc + cur, 0)
    const multiple = num_list.reduce((acc,cur) => acc * cur, 1)
    return num_list.length >= 11 ? sum : multiple
}
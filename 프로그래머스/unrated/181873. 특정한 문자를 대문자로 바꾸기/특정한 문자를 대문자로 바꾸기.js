function solution(my_string, alp) {
    return my_string.includes(alp) ? my_string.replaceAll(alp, alp.toUpperCase()) : my_string
}
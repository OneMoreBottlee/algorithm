function solution(my_string, s, e) {
    const arr = my_string.split("")
    return  [...arr.slice(0, s), ...arr.slice(s, e+1).reverse(), ...arr.slice(e+1)].join("")
}
function solution(my_strings, parts) {
    return my_strings.reduce((acc, cur, i) => acc += cur.slice(parts[i][0], parts[i][1]+1), "")
}
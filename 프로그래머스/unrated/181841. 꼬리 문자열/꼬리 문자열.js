function solution(str_list, ex) {
    return str_list.reduce((acc, cur) => 
        !cur.includes(ex) ? acc + cur : acc
    , "")
}
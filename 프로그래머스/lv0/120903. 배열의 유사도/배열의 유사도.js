function solution(s1, s2) {
    return s1.filter(el => s2.filter(ele => ele === el).length).length
}
function solution(n) {
    return parseInt(n.toString(3).split('').reverse().join().replaceAll(",",""),3)
}
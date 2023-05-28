function solution(arr, k) {
    return arr.map(el => k % 2 ? el * k : el + k)
}
function solution(strArr) {
    const change = (str, index) => {
        return index % 2 ? str.toUpperCase() : str.toLowerCase()
    }
    return strArr.map((str, index) => change(str, index))
}
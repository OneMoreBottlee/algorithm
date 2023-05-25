function solution(myString, pat) {
    const idx = myString.lastIndexOf(pat)
    return myString.slice(0, idx + pat.length)
}
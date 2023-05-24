function solution(myString, pat) {
  	const lowStr = myString.toLowerCase()
    const lowPat = pat.toLowerCase()
    return lowStr.includes(lowPat) ? 1 : 0
}
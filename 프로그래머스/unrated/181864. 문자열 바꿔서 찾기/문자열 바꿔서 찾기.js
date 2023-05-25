function solution(myString, pat) {
    return myString.split("").map(el => el === "A" ? "B" : "A").join("").includes(pat) ? 1 : 0
}
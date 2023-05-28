function solution(myString) {
    return myString.split("").reduce((acc,cur) => cur.charCodeAt() < 108 ? acc + "l" : acc + cur,"")
}
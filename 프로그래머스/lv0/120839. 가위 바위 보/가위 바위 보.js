function solution(rsp) {
    const winPlan = {"2" : "0", "0": "5", "5" : "2"}    
    return rsp.split("").reduce((acc,cur) => acc + winPlan[cur], "")
}
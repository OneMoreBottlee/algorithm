function solution(n, control) {
    const arr = control.split("")
    
    const w = arr.filter(el => el === "w").length
    const s = arr.filter(el => el === "s").length
    const d = arr.filter(el => el === "d").length
    const a = arr.filter(el => el === "a").length
    
    return n + w - s + (d * 10) - (a * 10)
}
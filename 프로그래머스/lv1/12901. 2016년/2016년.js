function solution(a, b) {
    let dday = new Date(`2016-${a}-${b}`)
    let days = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
    return days[dday.getDay()%7]
}
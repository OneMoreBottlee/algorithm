function solution(date1, date2) {
  	const Adate = new Date(date1[0], date1[1], date1[2])
    const Bdate = new Date(date2[0], date2[1], date2[2])
    return Adate < Bdate ? 1 : 0
}
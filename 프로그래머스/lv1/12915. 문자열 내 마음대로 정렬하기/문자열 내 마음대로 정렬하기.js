function solution(strings, n) {
  
	const str = strings.sort((a,b) => a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]))
  
  return str
}
function solution(numbers){
  const numCom = []
  let numArr = numbers.split("")
  
  // 순열
  const permutation = (arr, str) => {
    if(arr.length >= 1){
      for(let i=0; i<arr.length; i++){
        const newNum = str + arr[i]
        const copyArr = [...arr]
        copyArr.splice(i, 1)
        numCom.push(newNum)
        permutation(copyArr, newNum)
      }
    }
  }
  
  permutation(numArr, "")
  
  // 중복 제거
  const arr = new Set
  numCom.forEach(el => arr.add(el*1))
  
  // 소수 체크
  const primeCheck = (num) => {
    if(num <= 1)return false
    for(let i = 2; i*i <= num; i++){
      if(num % i === 0)return false
    }
    return true
  }
  
  const primeArr = []
  for(let num of arr){
    if(primeCheck(num)) primeArr.push(num)
  }

  return primeArr.length
}
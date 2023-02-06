function solution(arr) {
  
  // 최대공약수
  function gcd(a, b){
      while(b!==0){
          let r = a % b
          a = b
          b = r
      }
      return a
  }

  // 최소공배수
  function lcm(a, b){
      return a * (b / gcd(a,b))
  }
  
  return arr.reduce((acc,cur) => lcm(acc,cur) )
}
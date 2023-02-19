const solution = (n) => {
  
  function jump(n) {
      if(n <= 1)return 1

      let num = [1n, 1n, 2n]

      for(let i = 3; i <= n; i++) {
          num[i] = num[i-1] + num[i-2]
      }

      return num[n] % 1234567n
  }
  
  return jump(n)
}
function solution(arr) {
    const stk = []
    let i = 0 
    while(i < arr.length){
      	if(!stk.length){
          	stk.push(arr[i])
        }else{
            const lastElement = stk[stk.length-1]
            lastElement === arr[i] ? stk.pop() : stk.push(arr[i])
        }
      	i++
    }
  
  	return stk.length ? stk : [-1]
}
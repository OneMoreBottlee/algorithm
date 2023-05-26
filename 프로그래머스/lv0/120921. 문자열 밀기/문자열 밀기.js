function solution(A, B) {
  	const arrA = A.split("")
    const arrB = B.split("")
    let count = 0
  	
    while(count < arrA.length){
      if(arrA.join("") === arrB.join(""))break;
      const abc = arrA.pop()
      arrA.unshift(abc)
      count++
    }
    
    return arrA.join("") === arrB.join("") ? count : -1
}
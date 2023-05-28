function solution(arr) {
  	const Xlength = arr.length
    const Ylength = arr[0].length

    if(Xlength > Ylength){
      	const dif = Array(Xlength - Ylength).fill(0)
        return arr.map(el => [...el, ...dif])
    }
  
  	if(Xlength < Ylength){
      	for(let i = 0; i < Ylength - Xlength; i++){
          	const dif = Array(Ylength).fill(0)
            arr.push(dif)
        }
    }
    
    return arr
}
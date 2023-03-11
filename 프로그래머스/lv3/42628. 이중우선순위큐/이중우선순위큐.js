function solution(arr){
    const queue = []
    arr = arr.map(el => el.split(" "))
    
    for(let i = 0; i < arr.length; i++){
        const str = arr[i][0]
        const n = arr[i][1]*1
        
        if(str === 'I'){
            queue.push(n)
        }else{
            if(queue.length === 0){continue}
            else{
            const findValue = n === 1 ? Math.max(...queue) : Math.min(...queue)
            const delIdx = queue.indexOf(findValue)
            queue.splice(delIdx,1)
            }
        }
    }
    
    return queue.length === 0 ? [0, 0]: [Math.max(...queue), Math.min(...queue)]
}
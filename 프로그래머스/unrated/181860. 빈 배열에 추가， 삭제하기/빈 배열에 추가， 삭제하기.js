function solution(arr, flag) {
    return arr.reduce((acc, num, index) => 
        flag[index] ?
                      [...acc, ...new Array(num*2).fill(num)]
                      : acc.slice(0, acc.length-num)
    ,[])
}
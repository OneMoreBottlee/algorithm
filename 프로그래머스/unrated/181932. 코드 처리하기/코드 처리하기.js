function solution(code) {
    let mode = 0
    let ret = ""
    
    for(let i = 0; i < code.length; i++){
        const target = code[i]
        
        if(!mode){
            if(target !== "1"){
                if(i % 2 === 0){
                    ret += target
                }
            }else{
                mode = 1
            }
        }else{
            if(target !== "1"){
                if(i % 2 !== 0){
                    ret += target
                }
            }else{
                mode = 0
            }
        }
    }
    
    return ret.length ? ret : "EMPTY"
}
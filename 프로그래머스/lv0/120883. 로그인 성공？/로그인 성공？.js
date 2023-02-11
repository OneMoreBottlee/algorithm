function solution(id_pw, db) {
    const id = id_pw[0]
    const pw = id_pw[1]
    let result = "fail"
    
    // id 가 있을때
    db.forEach(el => {
      if(el[0] === id){
        result = el[1] === pw ? "login" : "wrong pw"
      }
    })
    
    // 없을때
  return result  
}
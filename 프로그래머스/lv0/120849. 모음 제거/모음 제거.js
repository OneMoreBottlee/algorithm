function solution(my_string) {
    const dic = ["a", "e", "i", "o", "u"]
    
    for(let i = 0; i < dic.length; i++){
      my_string = my_string.replaceAll(dic[i], "")
    }
		
    return my_string
}
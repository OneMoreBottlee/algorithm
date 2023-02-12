function solution(strings, n) {
    let result = [];
  
  	// 해당 요소 앞에 n 번째 문자 추가
    for (let i = 0; i < strings.length; i++) {
        let chu = strings[i][n];
        strings[i] = chu + strings[i];
    }
  
  	// 정렬
    strings.sort();
  
  	// 지우기 & result 에 추가
    for (var j = 0; j < strings.length; j++) {
        strings[j] = strings[j].replace(strings[j][0],"");
        result.push(strings[j])
    }

    return result;
}
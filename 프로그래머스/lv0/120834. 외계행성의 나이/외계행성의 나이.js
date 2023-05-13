function solution(age) {
    // 알파벳 배열
    const alphabetArr = "abcdefghijklmnopqrstuvwxyz".split("")
    
    // age를 한 글자씩 배열에 추가
    const ageArr = (age+"").split("")
    
    // age의 각 문자가 알파벳 배열의 몇번째인지 확인 후 문자열로 합치기
    return ageArr.map(el => alphabetArr[el]).join("")
}
function solution(lottos, win_nums) {
  	// 기억하고 있는 숫자만 필터링한 배열
  	const remember = lottos.filter(el => el)
    
    // 맞춘 갯수
    const matchNumber = remember.filter(el => win_nums.includes(el)).length
    
    // 잊어버린 번호의 갯수
    const forgotCnt = lottos.filter(el => !el).length
    
    // 맞춘 갯수로 확인하는 로또 순위
    const ranking = [6, 6, 5, 4, 3, 2, 1]
    
    // 최고, 최저 순위
    const [max, min] = [ranking[forgotCnt + matchNumber], ranking[matchNumber]]
    
    return [max, min]
}
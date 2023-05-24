function solution(spell, dic) {
    return dic.filter(el => spell.every((ele) => el.includes(ele))).length ? 1 : 2
}
-- 코드를 입력하세요
-- 1. MAX 함수 이용
# SELECT *
# FROM FOOD_PRODUCT
# WHERE PRICE = (
#     SELECT MAX(PRICE)
#     FROM FOOD_PRODUCT
# );

-- 2. 정렬 이용
-- PRICE 기준으로 내림차순 정렬 후 가장 높은 (인덱스가 낮은) 행 가져오기
SELECT *
FROM FOOD_PRODUCT
ORDER BY PRICE DESC
LIMIT 1;
-- 코드를 입력하세요
SELECT RI.rest_id, RI.rest_name, RI.food_type, RI.favorites, RI.address, ROUND(AVG(NVL(RR.review_score, 0)), 2) AS SCORE
FROM REST_INFO RI INNER JOIN REST_REVIEW RR
ON RI.rest_id = RR.rest_id
WHERE ADDRESS LIKE '서울%'
GROUP BY RI.rest_id, RI.rest_name, RI.food_type, RI.favorites, RI.address
ORDER BY SCORE DESC, RI.favorites DESC;


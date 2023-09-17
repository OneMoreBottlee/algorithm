-- 코드를 입력하세요
SELECT ORDER_ID, PRODUCT_ID, TO_CHAR(out_date, 'YYYY-MM-DD'),
    CASE WHEN out_date IS NULL THEN '출고미정'
    WHEN TO_CHAR(out_date, 'MM-DD') <= '05-01' THEN '출고완료' 
    WHEN TO_CHAR(out_date, 'MM-DD') > '05-01' THEN '출고대기' END AS 출고여부
FROM FOOD_ORDER
ORDER BY ORDER_ID;
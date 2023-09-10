-- 온라인과 오프라인 테이블을 합친다.
-- 오프라인 테이블에 USER_ID가 없다. 형식을 맞추기 위해 새로운 열을 추가하고 값을 NULL로 지정한다.

SELECT TO_CHAR(SALES_DATE, 'YYYY-MM-DD') AS SALES_DATE, PRODUCT_ID, USER_ID, SALES_AMOUNT
FROM ONLINE_SALE
WHERE TO_CHAR(SALES_DATE, 'YYYY-MM') = '2022-03'
UNION ALL
SELECT TO_CHAR(SALES_DATE, 'YYYY-MM-DD') AS SALES_DATE, PRODUCT_ID, NULL AS USER_ID, SALES_AMOUNT
FROM OFFLINE_SALE
WHERE TO_CHAR(SALES_DATE, 'YYYY-MM') = '2022-03'
ORDER BY SALES_DATE, PRODUCT_ID, USER_ID;
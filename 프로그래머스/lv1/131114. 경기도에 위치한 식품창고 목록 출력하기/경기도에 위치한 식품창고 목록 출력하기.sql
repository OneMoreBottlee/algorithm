-- 코드를 입력하세요
-- NVL(A, B) - A의 값이 NULL인 경우 B를 출력하고, NULL이 아니면 원래 값을 출력한다.
SELECT warehouse_id, warehouse_name, address, NVL(freezer_yn, 'N') AS freezer_yn
FROM FOOD_WAREHOUSE
WHERE address LIKE '경기도%'
ORDER BY warehouse_id ASC;
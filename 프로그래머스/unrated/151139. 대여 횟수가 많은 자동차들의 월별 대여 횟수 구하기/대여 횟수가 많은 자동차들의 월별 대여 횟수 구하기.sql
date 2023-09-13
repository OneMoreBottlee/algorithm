-- 코드를 입력하세요
SELECT EXTRACT(MONTH FROM CA.START_DATE) AS MONTH, CA.CAR_ID, COUNT(*) AS RECORDS
FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY CA
WHERE CA.CAR_ID IN (
    SELECT CAR_ID
    FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
    WHERE TO_CHAR(START_DATE, 'YYYY-MM') BETWEEN '2022-08' AND '2022-10'
    GROUP BY CAR_ID
    HAVING COUNT(*) >= 5)
    AND TO_CHAR(CA.START_DATE, 'YYYY-MM') BETWEEN '2022-08' AND '2022-10'
GROUP BY EXTRACT(MONTH FROM CA.START_DATE), CA.CAR_ID
HAVING COUNT(*) > 0
ORDER BY MONTH, CA.CAR_ID DESC;
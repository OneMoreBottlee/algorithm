-- 코드를 입력하세요
SELECT A.HISTORY_ID,
    CASE WHEN A.PERIOD = '할인없음' THEN A.FEE
    ELSE A.FEE - (A.FEE * B.DISCOUNT_RATE / 100)
    END AS FEE
FROM (SELECT HISTORY_ID, C.DAILY_FEE * (END_DATE - START_DATE + 1) AS FEE,
        CASE WHEN END_DATE - START_DATE + 1 >= 90 THEN '90일 이상'
        WHEN END_DATE - START_DATE + 1 >= 30 THEN '30일 이상'
        WHEN END_DATE - START_DATE + 1 >= 7 THEN '7일 이상'
        ELSE '할인없음'
        END AS PERIOD
    FROM CAR_RENTAL_COMPANY_CAR C, CAR_RENTAL_COMPANY_RENTAL_HISTORY H
    WHERE C.CAR_TYPE = '트럭' AND C.CAR_ID = H.CAR_ID) A
    LEFT JOIN CAR_RENTAL_COMPANY_DISCOUNT_PLAN B
    ON B.CAR_TYPE = '트럭' AND A.PERIOD = B.DURATION_TYPE
ORDER BY FEE DESC, HISTORY_ID DESC;
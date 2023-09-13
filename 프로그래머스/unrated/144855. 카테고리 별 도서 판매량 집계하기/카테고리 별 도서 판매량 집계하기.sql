-- 코드를 입력하세요
SELECT CATEGORY, SUM(SALES) AS TOTAL_SALES
FROM BOOK, BOOK_SALES
WHERE BOOK.BOOK_ID = BOOK_SALES.BOOK_ID AND TO_CHAR(SALES_DATE, 'YYYY-MM') = '2022-01'
GROUP BY CATEGORY
ORDER BY CATEGORY;
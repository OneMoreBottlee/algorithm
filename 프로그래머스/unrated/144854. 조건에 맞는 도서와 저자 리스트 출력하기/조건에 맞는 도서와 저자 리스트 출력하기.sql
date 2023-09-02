-- 코드를 입력하세요
SELECT book_id, author_name, TO_CHAR(published_date, 'YYYY-MM-DD') AS published_date
FROM BOOK INNER JOIN AUTHOR
ON BOOK.author_ID = AUTHOR.author_ID
WHERE CATEGORY = '경제'
ORDER BY published_date;
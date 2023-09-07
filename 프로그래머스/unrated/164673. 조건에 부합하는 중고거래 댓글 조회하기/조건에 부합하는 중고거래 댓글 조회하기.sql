-- 코드를 입력하세요
SELECT title, BOARD.board_id, reply_id, REPLY.writer_id, REPLY.contents, TO_CHAR(REPLY.created_date, 'YYYY-MM-DD') AS created_date
FROM USED_GOODS_BOARD BOARD, USED_GOODS_REPLY REPLY
WHERE BOARD.board_id = REPLY.board_id 
AND TO_CHAR(BOARD.created_date, 'YYYY-MM-DD') LIKE '2022-10-%'
ORDER BY REPLY.created_date ASC, title ASC;
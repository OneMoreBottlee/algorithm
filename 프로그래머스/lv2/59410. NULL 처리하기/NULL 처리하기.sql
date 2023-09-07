-- 코드를 입력하세요
-- NVL(A, B) - A가 NULL인 경우 B를 출력, NULL이 아니면 원래 값 출력
SELECT animal_type, NVL(name, 'No name') AS name, sex_upon_intake
FROM animal_ins
ORDER BY animal_id;
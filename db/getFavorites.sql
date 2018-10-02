SELECT *
FROM favorites
WHERE user_id = ${id}
order by id asc;
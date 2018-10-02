UPDATE favorites
SET rank = ${rank}
WHERE rest_id = ${restId}
AND user_id = ${user_id};

select * from favorites
where user_id = ${user_id};
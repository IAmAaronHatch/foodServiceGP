DELETE FROM favorites
WHERE rest_id = ${restId}
AND user_id = ${id};

select * from favorites
where user_id = ${id};

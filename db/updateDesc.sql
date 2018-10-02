update favorites 
set description = ${desc}
where rest_id = ${restId}
and user_id = ${id};

select * from favorites
where user_id = ${id}
order by id asc;
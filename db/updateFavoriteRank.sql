insert into favorites (
    user_id, rest_id, name, phone, rank
) values (
    $2, $1, $3, $4, 0
);

update favorites 
set rank = rank + 1
where user_id = $2;

delete from favorites
where user_id = $2
and rank = 6;

select * from favorites
where user_id = $2;
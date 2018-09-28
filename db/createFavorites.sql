insert into favorites (
    user_id, rest_id, name, phone, rank
) values (
    $2, $1, $3, $4, ((select count(*) from favorites where user_id = $2) + 1)
);

select * from favorites
where user_id = $2
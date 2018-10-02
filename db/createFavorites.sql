insert into favorites (
    user_id, rest_id, name, phone 
) values (
    $1, $2, $3, $4
);

-- select * from favorites
-- where user_id = $2;
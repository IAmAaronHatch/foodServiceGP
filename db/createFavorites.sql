insert into favorites (
    user_id, rest_id, name, phone, lat, lon
) values (
    $1, $2, $3, $4, $5, $6
);

-- select * from favorites
-- where user_id = $2;
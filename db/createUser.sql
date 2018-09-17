INSERT INTO users (auth_id, name, email, password, profile_picture)
VALUES ( ${sub}, ${name}, ${email}, ${password}, ${profile_picture})
RETURNING *;
INSERT INTO users (auth_id, name, email, picture)
VALUES ( ${sub}, ${nickname}, ${email}, ${picture})
RETURNING *;
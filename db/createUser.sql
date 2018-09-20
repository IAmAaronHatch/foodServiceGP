INSERT INTO users (auth_id, name, email, picture, lat, lon)
VALUES ( ${sub}, ${nickname}, ${email}, ${picture}, ${lat}, ${lon})
RETURNING *;
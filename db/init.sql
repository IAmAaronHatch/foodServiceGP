CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    auth_id TEXT,
    name VARCHAR,
    email VARCHAR,
    picture TEXT,
    lat NUMERIC,
    lon NUMERIC
)
CREATE TABLE favorites (
    id SERIAL PRIMARY KEY,
    user_id integer,
    rest_id VARCHAR,
    order integer

)
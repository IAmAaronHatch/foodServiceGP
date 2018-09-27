CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    auth_id TEXT,
    name VARCHAR,
    email VARCHAR,
    picture TEXT
);
CREATE TABLE favorites (
    id SERIAL PRIMARY KEY,
    user_id integer references users,
    rest_id VARCHAR,
    rank integer,
    name VARCHAR,
    phone TEXT,
);
CREATE TABLE cuisine (
    name VARCHAR,
    cuisine_id VARCHAR
);
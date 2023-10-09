CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE DATABASE jwtdatabase;

CREATE TABLE users (
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name TEXT NOT NULL,
    user_email TEXT NOT NULL,
    user_password TEXT NOT NULL
);

SELECT * FROM users;

INSERT INTO users (user_name, user_email, user_password) VALUES ('Bob', 'bob@gmail.com', 'bob');



-- creating products table

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    p_name VARCHAR(50) NOT NULL,
    quantity INT NOT NULL,
    price INT NOT NULL,
    p_description VARCHAR(200) NOT NULL,
    p_image VARCHAR(100) NOT NULL
);
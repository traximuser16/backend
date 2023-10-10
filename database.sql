CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION "json_to_recordset";

CREATE DATABASE jwtdatabase;

CREATE TABLE users (
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name TEXT NOT NULL,
    user_email TEXT NOT NULL,
    user_password TEXT NOT NULL
);

SELECT * FROM users;

INSERT INTO users (user_name, user_email, user_password) VALUES('Bob', 'bob@gmail.com', 'bob');

-- creating products table

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    p_name VARCHAR(50) NOT NULL,
    quantity INT NOT NULL,
    price INT NOT NULL,
    p_description VARCHAR(200) NOT NULL,
    p_image text[] NOT NULL
);


INSERT INTO products(p_name, quantity, price, p_description, p_image) VALUES('shirt',10,169,'this is a shirt',ARRAY['https://i.ibb.co/JmyPMFP/cup.webp','https://i.ibb.co/R2ccXW0/product3.webp']);


-- INSERT INTO people("uuid", name, phone)
-- SELECT "uuid", name, phone
-- FROM json_to_recordset(?) AS x("uuid" uuid, name text, phone int);
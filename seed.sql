DROP DATABASE if exists todolist;
CREATE DATABASE todolist;

\c todolist

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR NOT NULL,
    token VARCHAR
);

CREATE TABLE listitems (
 id SERIAL PRIMARY KEY,
   todo VARCHAR NOT NULL,
   user_id INT REFERENCES users(id)
);

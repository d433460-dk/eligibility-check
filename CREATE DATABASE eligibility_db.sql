CREATE DATABASE eligibility_db;

USE eligibility_db;

CREATE TABLE users (
id INT AUTO_INCREMENT PRIMARY KEY,
age INT,
income INT,
result VARCHAR(50)
);
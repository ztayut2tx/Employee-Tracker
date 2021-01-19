DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR (30) NULL,
    PRIMARY KEY (id)
);

CREATE TABLE employee_role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(35) NULL,
    salary DECIMAL(10,3) NULL,
    department_id INTEGER,
    PRIMARY KEY (id),
);

CREATE TABLE new_employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR (35) NULL,
    last_name VARCHAR (35) NULL,
    role_id INT default 0,
    PRIMARY KEY (id)
);

SELECT * FROM department;

SELECT * FROM employee_role;

SELECT * FROM new_employee;
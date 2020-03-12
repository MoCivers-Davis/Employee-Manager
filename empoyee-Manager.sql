DROP DATABASE IF EXISTS employee_managerDB;

CREATE DATABASE employee_managerDB;

USE employee_managerDB;

CREATE TABLE department (
       id INT(20) AUTO_INCREMENT NOT NULL, 
       name VARCHAR(30),
       PRIMARY KEY(id)
);

CREATE TABLE role (
       id INT(20) AUTO_INCREMENT NOT NULL, 
       title VARCHAR(30),
       salary DECIMAL(10,2),
       department_id INT(30),
       PRIMARY KEY(id)
);

CREATE TABLE employee (
    id INT(20) AUTO_INCREMENT NOT NULL,
    firstName VARCHAR(30),
    lastName VARCHAR(30),
    role_Id INT(10),
    manager_Id INT(30),
    PRIMARY KEY(id)
);





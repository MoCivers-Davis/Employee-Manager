-------------------Employee Seeds-----------------------------------
USE employee_managerDB;

INSERT INTO employee (firstName, lastName, role_Id, manager_Id)
VALUES ("Lisa", "Davis", "100", "01");

INSERT INTO employee (firstName, lastName, role_Id, manager_Id)
VALUES ("Terry", "Civers", "101", "02");

INSERT INTO employee (firstName, lastName, role_Id, manager_Id)
VALUES ("Casey", "Whitfield", "103", "04");

INSERT INTO employee (firstName, lastName, role_Id, manager_Id)
VALUES ("Ed", "Woodyard", "104", "01");

INSERT INTO employee (firstName, lastName, role_Id, manager_Id)
VALUES ("Rho", "Sauce", "105", "07");

INSERT INTO employee (firstName, lastName, role_Id, manager_Id)
VALUES ("Jona", "Liberson", "108", "06");

----------------------Role SEEDS----------------------------------------------
INSERT INTO role (title, salary, department_Id)
VALUES ("manager", "75000.00", "25");

INSERT INTO role (title, salary, department_Id)
VALUES ("clerk", "45000.00", "31");

INSERT INTO role (title, salary, department_Id)
VALUES ("SCRUM Master", "95000.00", "42");

INSERT INTO role (title, salary, department_Id)
VALUES ("drafter", "52000.00", "46");

INSERT INTO role (title, salary, department_Id)
VALUES ("Ananlyst", "69000.00", "29");

INSERT INTO role (title, salary, department_Id)
VALUES ("scientist", "99000.00", "81");

-------------------Department Seeds-------------------------------------------
INSERT INTO Department (name)
VALUES ("Engineering");

INSERT INTO Department (name)
VALUES ("Finance");

INSERT INTO Department (name)
VALUES ("Engineering");

INSERT INTO Department (name)
VALUES ("Engineering");

INSERT INTO Department (name)
VALUES ("Finance");

INSERT INTO Department (name)
VALUES ("Engineering");




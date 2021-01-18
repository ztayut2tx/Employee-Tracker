USE employee_db;

INSERT INTO department (name)
VALUES ("Sales");

INSERT INTO department (name)
VALUES ("Store-Room");

INSERT INTO department (name)
VALUES ("IT");

INSERT INTO department (name)
Values ("marketing");


INSERT INTO employee_role (title, salary, department_id)
VALUES ("Team-Lead", 70000, 1);

INSERT INTO employee_role (title, salary, department_id)
VALUES ("Truck-Crew", 40000, 2);

INSERT INTO employee_role (title, salary, department_id)
VALUES ("Developer", 80000, 3);

INSERT INTO employee_role (title, salary, department_id)
VALUES ("Advertisement", 50000, 4);



INSERT INTO new_employee (first_name, last_name, role_id, manager_id)
VALUES ("john", "doe", 4, 1);

INSERT INTO new_employee (first_name, last_name, role_id, manager_id)
VALUES ("Hoss", "Boss", 1, null ):
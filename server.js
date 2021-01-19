const inquirer = require ("inquirer");
const mysql = require ("mysql");
const table = require (`console.table`);

var connection = mysql.createConnection({
    host: "localhost",
    PORT: 3301,
    user: "root",
    password: "root",
    database: "employee_db"
});

connection.connect(function (err) {
    if (err) throw err;
    startSearch();
});

function startSearch() {
    inquirer.prompt({
        name: "Select",
        type: "list",
        message: "Please Select an Action",
        choices: [
            "New Department",
            "New Employee Role",
            "Add New Employee",
            "View Employee",
            "View Employee Roles",
            "View Department",
            "Update Employee Info"
        ]
    }).then(function (data) {
        switch (data.Select) {
            case "New Department":
            createDepartment();
             break;

            case "New Employee Role":
            createNewRole();
            break;

            case "Add New Employee":
            createNewEmp();
            break;

            case "View Department":
            viewDepartment();
            break;

            case "View Employee Role":
            viewEmpRoles();
            break;

            case "View Employee":
            viewEmp();
            break;

            case "Update Employee Info":
            updateEmp();
            break;
            
        }
    });
};

function createDepartment() {
    inquirer.prompt ( [
        {
            type: "input",
            name: "name",
            message: "Department name?"
        },
    ]).then(function (data) {
        connection.query(`INSERT INTO department SET`,
        {
            name: data.name
        })
        console.table(data);
        startSearch();
    });
};

function createNewEmp() {
    inquirer.prompt ( [
        {
            type: "input",
            name: "first_name",
            message: "What is the first name of the employee?"
        },
        {
            type: "input",
            name: "last_name",
            message: "What is the last name of the employee?"
        },
        {
            type: "list",
            name: "department",
            message: "What department will the employee work in?",
            choices: viewDepartment() 
        }
    ]).then(function (data) {
     
        connection.query(`INSERT INTO employee SET ?`,
        {
            first_name: data.first_name,
            last_name: data.last_name,
            role_id: role
        })
        console.table(data);
        startSearch();
    });
};

var currentDepartments = [];

function viewDepartment() {
    connection.query("SELECT * FROM department", function (err, res) {
        if (err) throw (err);

        for(var i = 0; i < res.length; i++) {
            currentDepartments.push(res[i].name)
        }
    });

    return currentDepartments;
};
const inquirer = require ("inquirer");
const mysql = require ("mysql");

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
}
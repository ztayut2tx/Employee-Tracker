const inquirer = require ("inquirer");
const mysql = require ("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    PORT: 3301,
    user: "root",
    password: "root",
    database: "employee_db"
)};
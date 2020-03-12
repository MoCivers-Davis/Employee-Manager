const mysql = require("mysql");
const inquirer = require("inquirer");

const PORT = process.env.PORT || 8080

const connection = mysql.createConnection({
    host: "localhost",
    //port: 3306,
    user: "root",
    password: "checksix",
    database: "employee_managerDB"
});
connection.connect(function (err, res) {
    if (err)
        throw err;
    //console.log("connected as id " + connection.threadId);
    askQuestions();

    //connection.end();
})

function askQuestions() {
    inquirer.prompt([
        {
            name: "menuChoices",
            message: "What would you like to do?",
            type: "list",
            choices: ["Add Department", "Add Role", "Add Employee", "View Department", "View Employee"],
        }
    ]).then(function (menuAnswers) {
        if (menuAnswers.menuChoices === "Add Department") {
            addDept();
        } else if (menuAnswers.menuChoices === "Add Role") {
            addRole();
        } else if (menuAnswers.menuChoices === "Add Employee") {
            addEmployee();
        } else if (menuAnswers.menuChoices === "View Department") {
            viewDept();
        } else if (menuAnswers.menuChoices === "View Employee") {
            viewEmployee();
        } else {
            connection.end();
        }
    });
}
function addDept() {
    inquirer.prompt([
        {
            name: "deptName",
            message: "Please enter your department name",
            type: "input",
        }
    ]).then(function (deptAnswers) {
        const departmentName = deptAnswers.deptName;

        connection.query("INSERT INTO department(name) VALUES(?)", [departmentName],
            function (err, data) {
                if (err) {
                    throw err;
                }
                console.log(`${departmentName} was added successfully!`);
            })
    });
}
function addRole() {
    inquirer.prompt([
        {
            name: "roleName",
            message: "What is your role",
            type: "input",
        }
    ]).then(function (roleAnswers) {
        const yourRoleName = roleAnswers.roleName;

        connection.query("INSERT INTO role(title) VALUES(?)", [yourRoleName],
            function (err, data) {
                if (err) {
                    throw err;
                }
                console.log(`${yourRoleName} was added successfully!`);
            })
    });
}
function addEmployee() {
    inquirer.prompt([
        {
            name: "employeeFirstName",
            message: "What is employee first name",
            type: "input",
        },
        {
            name: "employeeLastName",
            message: "What is employee last name ",
            type: "input",
        }
    ]).then(function (employeeAnswers) {
        const yourEmployeeFirstName = employeeAnswers.employeeFirstName;
        const yourEmployeeLastName = employeeAnswers.employeeLastName;

        connection.query("INSERT INTO employee(firstName, lastName) VALUES(?, ?)", [yourEmployeeFirstName, yourEmployeeLastName],
            function (err, data) {
                if (err) {
                    throw err;
                }
                console.log(`${[yourEmployeeFirstName, yourEmployeeLastName]} was added successfully!`);
            })
    });
}
function viewDept() {
    inquirer.prompt([
        {
            name: "viewWhichDept",
            message: "What Department would you like to view",
            type: "input",
        }
    ]).then(function (viewDeptAnswers) {
        const thisDeptViewed = viewDeptAnswers.viewWhichDept;

        connection.query("SELECT * FROM department WHERE name = ?", [thisDeptViewed],
            function (err, data) {
                if (err) {
                    throw err;
                }
                console.log(`${thisDeptViewed} was viewed successfully!`);
            })
    });
}
function viewEmployee() {

    connection.query("SELECT * FROM employee",
        function (err, res) {
            if (err) {
                throw err;
            }
            console.log("Employees were viewed successfully!");
        });
}

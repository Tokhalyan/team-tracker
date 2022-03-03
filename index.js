const { managerInfo, engineerInfo, internInfo } = require("./questions");
const Manager = require('./lib/Manager')
const employeesList = [];
const fs = require('fs');
const generateTemplate = require("./utils/generatePage");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// const Employee = require("./lib/Employee");

(function run() {
    managerInfo().then(manager => {
        if (manager.confirmAbout) {
            createEmployees(manager);
        } else {
            generateTemplate([new Manager(manager)]);
            console.log(generateTemplate);
        }
    })
})()

async function createEmployees(employee) {
    console.log(1, employeesList, employee);
    switch (employee.employeeType) {
        case "Manager":
            
            break;
    
            
        default:
            break;
    }
    employeesList.push(employee);
    console.log(2, employeesList)
    let newEmployee;
    if (employee.type === "Engineer") {
        newEmployee =  await engineerInfo();
        console.log("yes satkum em uje", newEmployee)
    } else {
        internInfo().then((data) => {
            newEmployee = new Intern(data);
        })
    }
    console.log("new employee", newEmployee)

    // if (newEmployee.isFinished) {
    //     createEmployees(newEmployee)
    // } else {
    //     // generateTemplate(employeesList);
    //     console.log(employeesList);
    // }
}
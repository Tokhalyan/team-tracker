const inquirer = require('inquirer');
const {makeEmpCard, writeToFile } = require("./generatePage");

const managerInfo = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: 'man_name',
            message: "Please enter Manager's name (Required)",
            validate: value => value ? true : 'I need a value to continue'
        },
        {
            type: "input",
            name: 'man_id',
            message: "Please enter Manager's ID (Required)",
            validate: value => value ? true : 'I need a value to continue'
        },
        {
            type: "input",
            name: 'man_email',
            message: "Please enter Manager's email address (Required)",
            validate: value => value ? true : 'I need a value to continue'
        },
        {
            type: "input",
            name: 'officeNumber',
            message: 'Please enter Office number (Required)',
            validate: value => value ? true : 'I need a value to continue'
        },
        {
            type: 'list',
            name: 'employeeType',
            message: "Would you like to add an engineer or intern information?",
            choices: ["Engineer", "Intern"]
        }
    ]).then(data => {
        makeEmpCard(data);
        if(data.employeeType == "Engineer") {
            engineerInfo();
        } else {
            internInfo();
        }
    })
}

const engineerInfo = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: 'eng_name',
            message: "Please enter Engineer's name (Required)",
            validate: value => value ? true : 'I need a value to continue'
        },
        {
            type: "input",
            name: 'eng_id',
            message: "Please enter Engineer's ID (Required)",
            validate: value => value ? true : 'I need a value to continue'
        },
        {
            type: "input",
            name: 'eng_email',
            message: "Please enter Engineer's email address (Required)",
            validate: value => value ? true : 'I need a value to continue'
        },
        {
            type: "input",
            name: 'github',
            message: "Please enter Engineer's Github username (Required)",
            validate: value => value ? true : 'I need a value to continue'
        },
        {
            type: 'list',
            name: 'employeeType',
            message: "Would you like to add an engineer or intern information?",
            choices: ["Engineer", "Intern", "Build my team"]
        }
    ]).then(data => {
        makeEmpCard(data)
        if(data.employeeType == "Engineer") {
            engineerInfo()
        } else if (data.employeeType == "Intern") {
            internInfo()
        } else {
            writeToFile()
        }
    })
}

const internInfo = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: 'int_name',
            message: "Please enter Intern's name (Required)",
            validate: value => value ? true : 'I need a value to continue'
        },
        {
            type: "input",
            name: 'int_id',
            message: "Please enter intern's ID (Required)",
            validate: value => value ? true : 'I need a value to continue'
        },
        {
            type: "input",
            name: 'int_email',
            message: "Please enter intern's email address (Required)",
            validate: value => value ? true : 'I need a value to continue'
        },
        {
            type: "input",
            name: 'school',
            message: "Please enter intern's school name (Required)",
            validate: value => value ? true : 'I need a value to continue'
        },
        {
            type: 'list',
            name: 'employeeType',
            message: 'What type of Employee would you like to add?',
            choices: ["Engineer", "Intern", "Build my team"],
        }
    ]).then(data => {
        makeEmpCard(data)
        if(data.employeeType == "Engineer") {
            engineerInfo()
        } else if (data.employeeType == "Intern") {
            internInfo()
        } else {
            writeToFile()
        }
    })
}

module.exports = {managerInfo, engineerInfo, internInfo};
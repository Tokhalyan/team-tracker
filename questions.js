const inquirer = require('inquirer');

const managerInfo = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: 'name',
            message: "Please enter Manager's name (Required)",
            validate: value => value ? true : 'I need a value to continue'
        },
        {
            type: "input",
            name: 'id',
            message: "Please enter Manager's ID (Required)",
            validate: value => value ? true : 'I need a value to continue'
        },
        {
            type: "input",
            name: 'email',
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
            type: "confirm",
            name: "confirmAbout",
            message: "Would you like to add an engineer or intern information?",
            default: true
        },
        {
            type: 'list',
            name: 'employeeType',
            message: 'What type of Employee would you like to add?',
            choices: ["Engineer", "Intern"],
            when: ({ confirmAbout }) => confirmAbout
        }
    ])
}

const engineerInfo = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: 'name',
            message: "Please enter Engineer's name (Required)",
            validate: value => value ? true : 'I need a value to continue'
        },
        {
            type: "input",
            name: 'id',
            message: "Please enter Engineer's ID (Required)",
            validate: value => value ? true : 'I need a value to continue'
        },
        {
            type: "input",
            name: 'email',
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
            type: "confirm",
            name: "confirmAbout",
            message: "Would you like to add an engineer or intern information?",
            default: true
        },
        {
            type: 'list',
            name: 'employeeType',
            message: 'What type of Employee would you like to add?',
            choices: ["Engineer", "Intern"],
            when: ({ confirmAbout }) => confirmAbout
        }
    ])
}

const internInfo = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: 'name',
            message: "Please enter Intern's name (Required)",
            validate: value => value ? true : 'I need a value to continue'
        },
        {
            type: "input",
            name: 'id',
            message: "Please enter intern's ID (Required)",
            validate: value => value ? true : 'I need a value to continue'
        },
        {
            type: "input",
            name: 'email',
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
            type: "confirm",
            name: "confirmAbout",
            message: "Would you like to add an engineer or intern information?",
            default: true
        },
        {
            type: 'list',
            name: 'employeeType',
            message: 'What type of Employee would you like to add?',
            choices: ["Engineer", "Intern"],
            when: ({ confirmAbout }) => confirmAbout
        }
    ])
}

module.exports = {managerInfo, engineerInfo, internInfo};
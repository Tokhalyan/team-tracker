const fs = require('fs');
const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');

function writeToFile(data) {
    return new Promise((res, rej) => {
        fs.writeFile('./dist/index.html', (generateHTML()), error => {
            if (error) {
                rej(error);
                return;
            }
            res(console.log("'index.html' file is created! Check dist/"))
        })
    });
};

const empCard = [];

function generateHTML() {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" type="text/css" href="../node_modules/bulma/css/bulma.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    </head>
    <body>
        <header>
            <div class="notification is-danger">
            <h1 class="is-size-1 has-text-centered has-text-white has-text-weight-bold">My Team</h1>
            </div>
        </header>
        <main class="container">
            <div class="columns is-multiline">
            ${empCard.join("\n")}
            </div>
        </main>
    </body>
    </html>
`
}

function makeEmpCard(data) {
    if (data.officeNumber) {
        const newManager = new Manager(data.man_name, data.man_id, data.man_email, data.officeNumber)
        const employeeCard = `
    <div class="card column m-3 has-background-light">
    <header class="card-header has-background-info">
    <h2 class="title has-text-centered has-text-white is-size-4">
    ${newManager.getName()}
    <p class=" card-header-title is-size-5">
    <span class="icon">
        <i class="fas fa-solid fa-mug-hot mr-2"></i>
    </span>Team Manager</p>
    </h2>
    </header>
    <div class="card-content">
        <div class="content mb-1">
            <div class="box">
                ID: ${newManager.getId()}
            </div>
        </div>
        <div class="content mb-1">
            <div class="box">
                <p>Email: <a href="mailto:${newManager.getEmail()}">${newManager.getEmail()}</a></p>
            </div>
        </div>
        <div class="content">
            <div class="box">
                <p>Office Number: ${data.officeNumber}</p>
            </div>
        </div>
    </div>
    </div>
    `
        empCard.push(employeeCard)

    } else if (data.github) {
        const newEmployee = new Engineer(data.eng_name, data.eng_id, data.eng_email, data.github)
        const employeeCard = `
        <div class="card column m-3 has-background-light">
        <header class="card-header has-background-info">
        <h2 class="title has-text-centered has-text-white is-size-4">
            ${newEmployee.getName()}
            <p class=" card-header-title is-size-5">
                <span class="icon">
                    <i class="fas fa-solid fa-glasses mr-2"></i>
                </span>Engineer
            </p>
        </h2>
        </header>
        <div class="card-content">
            <div class="content mb-1">
                <div class="box">
                    ID: ${newEmployee.getId()}
                </div>
            </div>
            <div class="content mb-1">
                <div class="box">
                    <p>Email: <a href="mailto:${newEmployee.getEmail()}">${newEmployee.getEmail()}</a></p>
                </div>
            </div>
            <div class="content">
                <div class="box">
                <p>GitHub: <a href="https://www.github.com/${newEmployee.getGithub()}" target="_blank">${newEmployee.getGithub()}</a></p>
                </div>
            </div>
        </div>
        </div>
        `
        empCard.push(employeeCard)
    } else if (data.school) {
        const newEmployee = new Intern(data.int_name, data.int_id, data.int_email, data.school);
        const employeeCard = `
        <div class="card column m-3 has-background-light">
        <header class="card-header has-background-info">
        <h2 class="title has-text-centered has-text-white is-size-4">
            ${newEmployee.getName()}
            <p class=" card-header-title is-size-5">
                <span class="icon">
                <i class="fas fa-solid fa-user-graduate mr-2"></i>
                </span>Intern
            </p>
        </h2>
        </header>
        <div class="card-content">
            <div class="content mb-1">
                <div class="box">
                    ID: ${newEmployee.getId()}
                </div>
            </div>
            <div class="content mb-1">
                <div class="box">
                    <p>Email: <a href="mailto:${newEmployee.getEmail()}">${newEmployee.getEmail()}</a></p>
                </div>
            </div>
            <div class="content">
                <div class="box">
                <p>School: ${newEmployee.getSchool()}</p>
                </div>
            </div>
        </div>
        </div>
        `
        empCard.push(employeeCard)
    }
}

module.exports = { writeToFile, generateHTML, makeEmpCard };
const questions = require('inquirer');
const fs = require("fs");


function generateTemplate(list) {
    // let cards = "";
    // list.forEach(item => {
    //     cards += `
    //         <div class="card">
    //             <div>
    //                 <p>${item.name}</p>
    //                 <p><i></i>${item.type}</p>
    //             </div>
    //             <div>
    //                 <p>${item.id}</p>
    //                 <p>${item.email}</p>
    //             </div>
    //         </div>
    //     `
    // });
    // const template = `
    // <!DOCTYPE html>
    // <html lang="en">
    // <head>
    //     <meta charset="UTF-8">
    //     <meta http-equiv="X-UA-Compatible" content="IE=edge">
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //     <title>My Team</title>
    // </head>
    // <body>
    //     <h1>My Team</h1>
    //     <div>
    //         ${cards}
    //     </div>
    // </body>
    // </html>
    // `;
    // fs.writeFile("../dist/index.html", template)
    console.log("klir", list);
}

module.exports = generateTemplate;
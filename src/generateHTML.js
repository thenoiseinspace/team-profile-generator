//basing on the miniproject
const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

function generateHTML(employeeProfiles) {
    let list = "";
    employeeProfiles.forEach(createList);
    
    function createList(value) {
     list += `<li> ${value.name} </li>`;
     list += `<li> ${value.id} </li>`;
     list += `<li> ${value.email} </li>`;
     list += `<li> ${value.officeNumber} </li>`;
    } 

    `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Our Team</title>
    </head>
    <body>
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
        <h1 class="display-4">Our team</h1>
        </ul>
    </div>
    </div>

    <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="..." alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">Card title</h5>
        
        <ul>
           ${list}
        </ul>    
        </div>
    </div>


    </body>
    </html>`

    let employeesMarkup = '';
    for (let index = 0; index < employeeProfiles.length; index++) {
        const currentEmployee = employeeProfiles[index];
        if(currentEmployee.school !== undefined) {

        } else {
            
        }
        employeesMarkup += `
                            <div>${currentEmployee.name}</div>
                            <div>${currentEmployee.id}</div>
                            `;
    }

    return employeesMarkup;
}

const init = () => {
    generateHTML()
      .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
      .then(() => console.log('Successfully wrote to index.html'))
      .catch((err) => console.error(err));
  };
  
  init();

module.exports = generateHTML; 
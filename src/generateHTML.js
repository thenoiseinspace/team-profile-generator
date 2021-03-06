//basing on the miniproject
const fs = require('fs');
// const util = require('util');
// const inquirer = require('inquirer');

// create writeFile function using promises instead of a callback function
// const writeFileAsync = util.promisify(fs.writeFile);


const generateHTML = (employeeProfiles) => {

//creating empty array that will hold each block of content that is generated when the user adds a new employee


    let htmlBlock = []; 
//creating a js function with an HTML block for each type of employee

// const HeaderHTML = () => {
    
//     let headerHTMLblock =

//     `<header style = "color: white; background-color: darkgreen;"> 
//         <h1>Our Team</h1>
//     </header>
//     `; 
//    htmlBlock.push(headerHTMLblock)
// }

    //code block for managers
    const makeManager = manager => {
    console.log(manager); 
    let managerHTMLblock =

    `<div class = "card" style = "width: 16rem; border: 1px solid black;">
        <div class = "card-title">
        <h1 style="background-color:#90ee90;">${manager.name}, Manager</h1>
        </div>
     
        <ul class="unordered-list">
            <li class="list-item">ID: ${manager.id}</li>
            <li class="list-item">Email:<span id="email"><a href="mailto:${manager.email}">${manager.email}</a></li>
            <li class="list-item">Office number: ${manager.officeNumber}</li>
        </ul>
    </div>
    `; 
   htmlBlock.push(managerHTMLblock)
}

//code block for engineers
const makeEngineer = engineer => {
    console.log(engineer); 
    let engineerHTMLblock =

    `<div class = "card" style = "width: 16rem; border: 1px solid black;">
        <div class = "card-title">
        <h1 style="background-color:#90ee90;">${engineer.name}, Engineer</h1> 
        </div>
     
        <ul class="unordered-list">
            <li class="list-item">ID: ${engineer.id}</li>
            <li class="list-item">Email:<span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></li>
            <li class="list-item">GitHub username: <a target="_blank" href="https://github.com/${engineer.githubName}">${engineer.githubName}</a></li>
        </ul>
    </div>
    `; 
   htmlBlock.push(engineerHTMLblock)
}

//code block for interns
const makeIntern = intern => {
    console.log(intern); 
    let internHTMLblock =

    `<div class = "card" style = "width: 16rem; border: 1px solid black;">
        <div class = "card-title">
        <h1 style="background-color:#90ee90;"> ${intern.name}, Intern</h1> 
        </div>
     
        <ul class="unordered-list">
            <li class="list-item">ID: ${intern.id}</li>
            <li class="list-item">Email:<span id="email"><a href="mailto:${intern.email}">${intern.email}</a></li>
            <li class="list-item">School:${intern.internSchool}</a></li>
        </ul>
    </div>
    `; 
   htmlBlock.push(internHTMLblock)
}

//creating a for loop to cycle through all created employees

for (let i=0; i <employeeProfiles.length; i++) {
    if (employeeProfiles[i].getRole() === "Manager"){
        makeManager(employeeProfiles[i]); 
    }
    else if (employeeProfiles[i].getRole() === "Engineer"){
        makeEngineer(employeeProfiles[i]);
    }
    else if (employeeProfiles[i].getRole() === "Intern") {
        makeIntern(employeeProfiles[i]); 
    }
}

return htmlBlock.join(''); 
}

module.exports = employeeProfiles => {

    // return
    ` <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="../dist/style.css"/>
    <title>Our Team</title>
    </head>
    <body>
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
        <h1 class="display-4">Our team</h1>
        </ul>
    </div>
    </div>

    <main> ${generateHTML(employeeProfiles)} </main>

    </body>
    </html>
    `; 
}

module.exports = generateHTML; 
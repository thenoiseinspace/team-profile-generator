const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const Employee = require ('./classes'); 

//first we take in the manager's information
const init = () => {
    inquirer.prompt([
     {
       type: 'input',
       name: 'managerName',
       message: 'What is your name?',
     },
     {
       type: 'input',
       name: 'managerID',
       message: 'What is your employee ID?',
     },
     {
       type: 'input',
       name: 'managerEmail',
       message: 'What is your email address?',
     },
     {
       type: 'input',
       name: 'managerOfficeNumber',
       message: 'What is your office number?',
     },
   ])
   .then((res) => {
       console.log(res);
   }); 
 };
 
 



//create a switch case statement to pick which questions are delivered

const expr = 'Engineer';

switch (expr) {
  case 'Engineer':
    console.log('Engineer selected'); 
        const initEngineer = () => {
            inquirer.prompt([
            {
            type: 'input',
            name: 'engineerName',
            message: "What is the engineer's name?",
            },
            {
            type: 'input',
            name: 'engineerID',
            message: "What is the engineer's ID?",
            },
            {
            type: 'input',
            name: 'engineerEmail',
            message: "What is the engineer's email address?",
            },
            {
            type: 'input',
            name: 'githubName',
            message: "What is the engineer's GitHub username?",
            }
        ])
        .then((res) => {
            console.log(res);
        }); 
        //NEED TO RETURN TO MENU HERE
        };

  case 'Intern':
    console.log('Intern selected');

    const initIntern = () => {
        inquirer.prompt([
        {
        type: 'input',
        name: 'internName',
        message: "What is the intern's name?",
        },
        {
        type: 'input',
        name: 'internID',
        message: "What is the intern's ID?",
        },
        {
        type: 'input',
        name: 'engineerEmail',
        message: "What is the intern's email address?",
        },
        {
        type: 'input',
        name: 'internSchool',
        message: "What is the intern's school?",
        }
    ])
    .then((res) => {
        console.log(res);
    }); 
    //NEED TO RETURN TO MENU HERE
    };        

    break;
  default:
    console.log(`Sorry, no values were logged.`);
}

init();



/////////


const generateHTML = (res) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>My Team Roster</title>
</head>
// <body>
//   <div class="jumbotron jumbotron-fluid">
//   <div class="container">
//     <h1 class="display-4">Hi! My name is ${answers.name}</h1>
//     <p class="lead">I am from ${answers.location}.</p>
//     <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
//     <ul class="list-group">
//       <li class="list-group-item">My GitHub username is ${answers.github}</li>
//       <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
//     </ul>
//   </div>
// </div>
// </body>
// </html>`;

// // Bonus using writeFileAsync as a promise
// const init = () => {
//   promptUser()
//     .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
//     .then(() => console.log('Successfully wrote to index.html'))
//     .catch((err) => console.error(err));
// };

// init();

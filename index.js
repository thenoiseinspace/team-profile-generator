const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const { choices } = require('yargs');

const Employee = require ('./lib/Employee'); 
const Manager = require ('./lib/Manager');
const Intern = require ('./lib/Intern'); 
const Engineer = require ('./lib/Engineer'); 
const generateHTML = require ('./generateHTML'); 

//creating an empty array so I have some place to store the information I take from the user
const employeeProfiles = []; 

//first we take in the manager's information
const askManagerQuestions = () => {
    inquirer.prompt([
     {
       type: 'input',
       name: 'name',
       message: 'What is your name?',
     },
     {
       type: 'input',
       name: 'id',
       message: 'What is your employee ID?',
     },
     {
       type: 'input',
       name: 'email',
       message: 'What is your email address?',
     },
     {
       type: 'input',
       name: 'officeNumber',
       message: 'What is your office number?',
     },
     {
        type: "list", 
        name: 'addOption', 
        message: 'Would you like to add another team member?', 
        choices: ['Add engineer', 'Add intern', 'No additional team members, build team page'], 
        }
   ])
   //Taking the responses and creating an object for the manager's profile
   //Then adding that profile to the team array
   //then based on answer to previous question, running either intern or engineer questions
   .then((res) => {
       console.log(res);
       const managerProfile = new Manager(res.name, res.id, res.email, res.officeNumber);
       employeeProfiles.push(managerProfile); 
       addTeamMembers(res.addOption); 
   }); 
 };
 
 askManagerQuestions(); 


//create a switch case statement to pick which questions are delivered

function addTeamMembers(teamMember){
    switch (teamMember) {
    case 'Add engineer':
        console.log('Engineer selected'); 
            inquirer.prompt([
                {
                type: 'input',
                name: 'name',
                message: "What is the engineer's name?",
                },
                {
                type: 'input',
                name: 'id',
                message: "What is the engineer's ID?",
                },
                {
                type: 'input',
                name: 'email',
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
//making a variable to hold this new profile
                const engineerProfile = new Engineer(res.engineerName, res.engineerID, res.engineerEmail, res.githubName);
//adding the profile to the team array
                employeeProfiles.push(engineerProfile)
            }); 
            break; 

    case 'Add intern':
        console.log('Intern selected');
            inquirer.prompt([
            {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
            },
            {
            type: 'input',
            name: 'id',
            message: "What is the intern's ID?",
            },
            {
            type: 'input',
            name: 'email',
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
//making a variable to hold this new profile
            const internProfile = new Intern(res.internName, res.internID, res.internEmail, res.internSchool);
//adding the profile to the team array
            employeeProfiles.push(internProfile)
        }); 
        //NEED TO RETURN TO MENU HERE
        // };        
        break;
    case 'No additional team members, build team page':
        //will this work? 
        // generateHTML(res); 
        break; 
    default:
        console.log(`Sorry, no values were logged.`);
}}

function createTeamPage(){
    fs.writeFileSync('./dist/teampage.html', generatePage(employeeProfiles));
}

console.log(employeeProfiles); 

/////////
//use write file method
//put into another file and import this in, from there call this function when you need it 
//going to go with writeFile, 
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);


//creating classes

class Employee {
    // Based on activity 21
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email; 
    }
  
    printValues = function() {
      console.log(
          `You entered: \n
            ${this.name} \n
            ${this.id} \n
            ${this.email}
            `);
    }

  }; 

  completedNotification = function () {
    console.log('The employee has been tracked');
}; 
  
//   const shape = new Shape(25, 25);
  
//   shape.printInfo();



//end classes

module.exports = Employee; 
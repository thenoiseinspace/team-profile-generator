//basing this on activity 21 on classes

const Employee = require ('./Employee'); 

class Intern extends Employee {
    constructor (internName, internID, internEmail, internSchool){
        this.internName = internName; 
        this.internID = internID; 
        this.internEmail = internEmail;
        this.internSchool = internSchool; 
    }

    getRole(){
        return "Intern"; 
    }
}

module.exports = Intern; 
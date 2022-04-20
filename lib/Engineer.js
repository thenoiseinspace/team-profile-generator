//basing this on activity 21 on classes

const Employee = require ('./Employee'); 

class Engineer extends Employee {
    constructor (engineerName, engineerID, engineerEmail, githubName){
        this.engineerName = engineerName; 
        this.engineerID = engineerID; 
        this.engineerEmail = engineerEmail;
        this.githubName = githubName; 
    }

    getRole(){
        return "Engineer"; 
    }
}

module.exports = Engineer; 
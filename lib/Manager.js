//basing this on activity 21 on classes

const Employee = require ('./Employee'); 

class Manager extends Employee {
    constructor (managerName, managerID, managerEmail, managerOfficeNumber){
        this.managerName = managerName; 
        this.managerID = managerID; 
        this.managerEmail = managerEmail;
        this.managerOfficeNumber = managerOfficeNumber; 
    }

    getRole(){
        return "Manager"; 
    }
}

module.exports = Manager; 


//basing this on activity 21 on classes

const Employee = require ('./Employee'); 

class Intern extends Employee {
    constructor (name, id, email, internSchool){
        super(name, id, email); 
        // this.name = name; 
        // this.id = id; 
        // this.email = email;
        this.internSchool = internSchool; 
    }
    getSchool(){
        return this.internSchool; 
    }

    getRole(){
        return "Intern"; 
    }
}

module.exports = Intern; 
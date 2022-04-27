//basing this on activity 21 on classes

const Employee = require ('./Employee'); 

class Engineer extends Employee {
    constructor (name, id, email, githubName){
//when I ran this, node gave me "ReferenceError: Must call super constructor." I don't think we covered that but I found some info on MDN. Not sure if this is right. 
        super(name, id, email); 
        // this.name = name; 
        // this.id = id; 
        // this.email = email;
        this.githubName = githubName; 
    }

    getGithub(){
        return this.githubName; 
    }    

    getRole(){
        return "Engineer"; 
    }
}

module.exports = Engineer; 
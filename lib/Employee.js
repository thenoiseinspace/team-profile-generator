//basing this on activity 21 on classes

class Employee {
    constructor (name, id, email){
        this.name = name; 
        this.id = id; 
        this.email = email;
    }

    getRole(){
        return "Employee"; 
    }

    getName(){
        return this.name; 
    }

    getId() {
        return this.id; 
    }

    getRole(){
        return 'Employee'
    }
}

module.exports = Employee; 
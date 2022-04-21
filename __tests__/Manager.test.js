//Basing this on activity 13

//const ManagerTest = require ("../index")
//const { Console } = require('console');
const Manager = require('../lib/Manager'); 

describe('testing manager class', () => {
    const person = new Manager("Bob Smith", 123, "email@email.com",)
    console.log(person.getRole()); 

    it('should assign a name to Manager', () => {
      expect(person.getName()).toBe('Bob Smith');
    });
  
    it('should assign an id to Manager', () => {
      expect(person.getId()).toBe(123);
    });
  
    it('should should assign an email to Manager ', () => {
      expect(person.getEmail()).toBe('email@email.com');
    });
  
  });
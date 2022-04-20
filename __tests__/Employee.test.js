//const { describe } = require("yargs");
const Employee = require ("../lib/Employee")

//Basing this on activity 13

describe('testing Employee class', () => {
    const employeeMock = new Employee("Bob Smith", 123, "email@email.com")
    // it('should contain three properties of name, id and email', () => {
    //   expect(new Employee ("Bob Smith", 123, "email@email.com",)).toBe('1');
    // });
  
    it('should assign a name to Employee', () => {
      expect(employeeMock.getName()).toBe('Bob Smith');
    });
  
    it('should assign an id to Employee', () => {
      expect(employeeMock.getId()).toBe(123);
    });
  
    it('should should assign an email to Employee ', () => {
      expect(employeeMock.getEmail()).toBe('email@email.com');
    });
  
  });
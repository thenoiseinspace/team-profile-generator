const { describe } = require("yargs");
const EmployeeTest = require ("../index");

//Basing this on activity 13

const ManagerTest = require ("../index")
const Manager = require('../lib/Manager'); 

describe('testing Employee class', () => {
    it('should contain three properties of name, id and email', () => {
      expect(new Employee ("Bob Smith", 123, "email@email.com",)).toBe('1');
    });
  
    it('should assign a name to Employee', () => {
      expect(Employee([0])).toBe('Bob Smith');
    });
  
    it('should assign an id to Manager', () => {
      expect(Employee([1])).toBe(123);
    });
  
    it('should should assign an email to Manager ', () => {
      expect(Employee([2])).toBe('email@email.com');
    });
  
  });
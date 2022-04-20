//Basing this on activity 13

const ManagerTest = require ("../index")
const Manager = require('../lib/Manager'); 

describe('testing manager class', () => {
    it('should contain all three properties of name, id and email', () => {
      expect(new Manager ("Bob Smith", 123, "email@email.com",)).toBe('1');
    });
  
    it('should assign a name to Manager', () => {
      expect(Manager([0])).toBe('Bob Smith');
    });
  
    it('should assign an id to Manager', () => {
      expect(Manager([1])).toBe(123);
    });
  
    it('should should assign an email to Manager ', () => {
      expect(Manager([2])).toBe('email@email.com');
    });
  
  });
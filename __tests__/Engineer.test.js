const EngineerTest = require ("../index")

//Basing this on activity 13

const ManagerTest = require ("../index")
const Manager = require('../lib/Manager'); 

describe('testing Engineer class', () => {
    it('should contain three properties of name, id and email', () => {
      expect(new Engineer ("Bob Smith", 123, "email@email.com",)).toBe('1');
    });
  
    it('should assign a name to Engineer', () => {
      expect(Engineer([0])).toBe('Bob Smith');
    });
  
    it('should assign an id to Engineer', () => {
      expect(Engineer([1])).toBe(123);
    });
  
    it('should should assign an email to Engineer ', () => {
      expect(Engineer([2])).toBe('email@email.com');
    });
  
  });
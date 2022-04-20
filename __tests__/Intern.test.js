const InternTest = require ("../index")

//Basing this on activity 13

describe('testing Intern class', () => {
    it('should contain three properties of name, id and email', () => {
      expect(new Intern ("Bob Smith", 123, "email@email.com",)).toBe('1');
    });
  
    it('should assign a name to Intern', () => {
      expect(Intern([0])).toBe('Bob Smith');
    });
  
    it('should assign an id to Intern', () => {
      expect(Employee([1])).toBe(123);
    });
  
    it('should should assign an email to Intern ', () => {
      expect(Intern([2])).toBe('email@email.com');
    });
  
  });
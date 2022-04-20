const Intern = require ("../lib/Intern")

//Basing this on activity 13

describe('testing Intern class', () => {
    const person = new Intern("Bob Smith", 123, "email@email.com",)
    console.log(person.getRole()); 
  
    it('should assign a name to Intern', () => {
      expect(person.getName()).toBe('Bob Smith');
    });
  
    it('should assign an id to Intern', () => {
      expect(person.getId()).toBe(123);
    });
  
    it('should should assign an email to Intern ', () => {
      expect(person.getEmail()).toBe('email@email.com');
    });
  
  });
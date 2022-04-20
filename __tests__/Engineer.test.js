const Engineer = require ("../lib/Engineer")

//Basing this on activity 13

describe('testing Engineer class', () => {
    const person = new Engineer("Bob Smith", 123, "email@email.com",)
    console.log(person.getRole()); 
  
    it('should assign a name to Engineer', () => {
      expect(person.getName()).toBe('Bob Smith');
    });
  
    it('should assign an id to Engineer', () => {
      expect(person.getId()).toBe(123);
    });
  
    it('should should assign an email to Engineer', () => {
      expect(person.getEmail()).toBe('email@email.com');
    });
  
  });
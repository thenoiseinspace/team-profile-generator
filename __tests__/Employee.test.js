const { describe } = require("yargs");
const EmployeeTest = require ("../index");

describe("EmployeeTest", () =>{
     it("should")
}
)

//Basing this on activity 13

const ManagerTest = require ("../index")
const Manager = require('../lib/Manager'); 

describe('testing manager class', () => {
    it('should contain all three properties of name, id and email', () => {
      expect(new Manager ("Bob Smith", 123, "email@email.com",)).toBe('1');
      expect(fizzBuzz([1, 2])).toBe('1, 2');
    });
  
    it('should return Fizz if multiple of 3', () => {
      expect(fizzBuzz([3])).toBe('Fizz');
      expect(fizzBuzz([3, 6, 12])).toBe('Fizz, Fizz, Fizz');
    });
  
    it('should return Buzz if multiple of 5', () => {
      expect(fizzBuzz([10])).toBe('Buzz');
      expect(fizzBuzz([10, 20, 25])).toBe('Buzz, Buzz, Buzz');
    });
  
    it('should return FizzBuzz if a multiple of both 3 and 5', () => {
      expect(fizzBuzz([15])).toBe('FizzBuzz');
      expect(fizzBuzz([15, 30, 45])).toBe('FizzBuzz, FizzBuzz, FizzBuzz');
    });
  
  });
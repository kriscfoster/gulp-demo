const expect = require('chai').expect;
const fizzBuzz = require('../fizzBuzz.js');

// The FizzBuzz rules...
// for numbers that are a multiple of 3,
// return "Fizz" instead of the number
// for numbers that are a multiple of 5
// return "Buzz" instead of the number
// for numbers that are a multiple of both,
// return "FizzBuzz" instead of just Fizz or Buzz

describe('FizzBuzz >', () => {
  it('Ok, 3 is multiple of 3 => "Fizz"', () => {
    expect(fizzBuzz(3)).to.equal("Fizz");
  });

  // it('Ok, 6 is multiple of 3 => "Fizz"', () => {
  //   expect(fizzBuzz(6)).to.equal("Fizz");
  // });

  // it('Ok, 5 is multiple of 5 => "Buzz"', () => {
  //   expect(fizzBuzz(5)).to.equal("Buzz");
  // });

  // it('Ok, 10 is multiple of 5 => "Buzz"', () => {
  //   expect(fizzBuzz(10)).to.equal("Buzz");
  // });

  // it('Ok, 15 is multiple of both => "FizzBuzz"', () => {
  //   expect(fizzBuzz(15)).to.equal("FizzBuzz");
  // });
});

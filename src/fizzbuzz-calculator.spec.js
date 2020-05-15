describe('fizzbuzz-calculator', () => {
    test.skip('when number is 1 then returns "1"', () => {
        expect(calculateFizzBuzz(1)).toEqual('1');
    })

    test.skip('when number is 2 then returns "2"', () => {
        expect(calculateFizzBuzz(2)).toEqual('2');
    })

    test.skip('when number is 3 then returns "fizz"', () => {
        expect(calculateFizzBuzz(3)).toEqual('fizz');
    })

    test.skip('when number is 6 then returns "fizz"', () => {
        expect(calculateFizzBuzz(6)).toEqual('fizz');
    })

    test.skip('when number is 5 then returns "buzz"', () => {
        expect(calculateFizzBuzz(5)).toEqual('buzz');
    })

    test.skip('when number is 15 then returns "fizzbuzz"', () => {
        expect(calculateFizzBuzz(15)).toEqual('fizzbuzz');
    })
})
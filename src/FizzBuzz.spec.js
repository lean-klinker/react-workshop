import React from 'react';
import { render } from '@testing-library/react';

describe('FizzBuzz', () => {
    test('when number is 1 then displays 1', () => {
        const { container } = render(<FizzBuzz number={1}/>);

        expect(container).toHaveTextContent('1');
    })

    test.skip('when number is 2 then displays 2', () => {
        const { container } = render(<FizzBuzz number={2}/>);

        expect(container).toHaveTextContent('2');
    })

    test.skip('when number is 3 then displays fizz', () => {
        const { container } = render(<FizzBuzz number={3}/>);

        expect(container).toHaveTextContent('fizz');
    })

    test.skip('when number is 6 then displays fizz', () => {
        const { container } = render(<FizzBuzz number={6}/>);

        expect(container).toHaveTextContent('fizz');
    })

    test.skip('when number is 5 then displays buzz', () => {
        const { container } = render(<FizzBuzz number={5}/>);

        expect(container).toHaveTextContent('buzz');
    })

    test.skip('when number is 15 then displays fizzbuzz', () => {
        const { container } = render(<FizzBuzz number={15}/>);

        expect(container).toHaveTextContent('fizzbuzz');
    })
})
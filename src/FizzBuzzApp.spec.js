import React from 'react';
import { render, fireEvent } from '@testing-library/react';

describe('FizzBuzzApp', () => {
    test.skip('when rendered then displays 1', () => {
        const { container } = render(<FizzBuzzApp />);

        expect(container).toHaveTextContent('1');
    })

    test.skip('when number is incremented then displays 2', () => {
        const { container, getByTestId } = render(<FizzBuzzApp />);

        incrementNumber(getByTestId('increment'));

        expect(container).toHaveTextContent('2');
    })

    test.skip('when number is incremented twice then displays fizz', () => {
        const { container, getByTestId } = render(<FizzBuzzApp />);

        incrementNumber(getByTestId('increment'), 2);

        expect(container).toHaveTextContent('fizz');
    })

    test.skip('when number is incremented four times then displays buzz', () => {
        const { container, getByTestId } = render(<FizzBuzzApp />);

        incrementNumber(getByTestId('increment'), 4);

        expect(container).toHaveTextContent('buzz');
    })

    function incrementNumber(element, times = 1) {
        for (let i = 0; i < times; i++) {
            fireEvent.click(element);
        }
    }
})
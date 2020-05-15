import React from 'react';
import { render, fireEvent } from '@testing-library/react';

describe('FizzBuzzApp', () => {
    let container, incrementButton;

    beforeEach(() => {
        const result = render(<FizzBuzzApp />);
        container = result.container;
        incrementButton = result.getByTestId('increment');
    })

    test.skip('when rendered then displays 1', () => {
        expect(container).toHaveTextContent('1');
    })

    test.skip('when number is incremented then displays 2', () => {
        incrementNumber();

        expect(container).toHaveTextContent('2');
    })

    test.skip('when number is incremented twice then displays fizz', () => {
        incrementNumber(2);

        expect(container).toHaveTextContent('fizz');
    })

    test.skip('when number is incremented four times then displays buzz', () => {
        incrementNumber(4);

        expect(container).toHaveTextContent('buzz');
    })

    function incrementNumber(times = 1) {
        for (let i = 0; i < times; i++) {
            fireEvent.click(incrementButton);
        }
    }
})
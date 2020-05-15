import React from 'react';
import { render, fireEvent } from "@testing-library/react";

describe('FizzBuzzForm', () => {
    let container, input, submitButton;

    beforeEach(() => {
        const result = render(<FizzBuzzForm />);
        container = result.container;
        input = result.getByTestId('number-input');
        submitButton = result.getByTestId('submit-button');
    })

    test.skip('when user submits 1 then displays 1', () => {
        fireEvent.change(input, { target: { value: '3' }});
        fireEvent.click(submitButton);

        expect(container).toHaveTextContent('1');
    })

    test.skip('when user submits three then displays fizz', () => {
        fireEvent.change(input, { target: { value: '3' }});
        fireEvent.click(submitButton);

        expect(container).toHaveTextContent('fizz');
    })
})
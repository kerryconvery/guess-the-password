import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PageControls from '../PageControls';
import '@testing-library/jest-dom/extend-expect';

describe('When interacting with the page controls', () => {
  it('should call the on submit event when the submit button is pressed', () => {
    const onSubmit = jest.fn();

    render(<PageControls onSubmit={onSubmit} onInputGuess={jest.fn} />);

    const submitButton = screen.getByText('Submit');

    fireEvent.click(submitButton);

    expect(onSubmit).toHaveBeenCalled();
  });

  it('should call the on input guess changed event when the user types into the guess field', () => {
    const onInputGuess = jest.fn();

    const { container } = render(<PageControls onSubmit={jest.fn} onInputGuess={onInputGuess} />);

    const guessTextField = container.querySelector('[type="text"]')

    fireEvent.change(guessTextField, { target: { value: '78664734' } })

    expect(onInputGuess).toHaveBeenCalled();
  });
})
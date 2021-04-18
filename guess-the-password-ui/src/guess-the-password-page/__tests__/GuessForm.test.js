import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GuessForm from '../GuessForm';
import '@testing-library/jest-dom/extend-expect';

describe('When the user is interacting with the page controls', () => {
  it('should call the on input guess changed event when the user types into the guess field', () => {
    const onInputGuess = jest.fn();

    const { container } = render(<GuessForm onSubmit={jest.fn} onInputGuess={onInputGuess} />);

    typeGuess('78664734', container);

    expect(onInputGuess).toHaveBeenCalled();
  });

  it('should call the on submit event when the submit button is pressed', () => {
    const onSubmit = jest.fn();

    const { container } = render(<GuessForm guess='323' onSubmit={onSubmit} onInputGuess={jest.fn} />);

    clickSubmitButton();

    expect(onSubmit).toHaveBeenCalled();
  });

  it('should call the on submit event when the user presses enter key in the guess field', () => {
    const onSubmit = jest.fn();

    const { container } = render(<GuessForm guess='323' onSubmit={onSubmit} onInputGuess={jest.fn} />);

    pressEnter(container);

    expect(onSubmit).toHaveBeenCalled();
  });

  it('should not call the on submit event when the submit button is pressed but the guess field is empty', () => {
    const onSubmit = jest.fn();

    render(<GuessForm onSubmit={onSubmit} onInputGuess={jest.fn} />);

    clickSubmitButton();

    expect(onSubmit).not.toHaveBeenCalled();
  });

  it('should not all the on submit event when the user presses enter key in the guess field but the guess field is empty', () => {
    const onSubmit = jest.fn();

    const { container } = render(<GuessForm onSubmit={onSubmit} onInputGuess={jest.fn} />);

    pressEnter(container);

    expect(onSubmit).not.toHaveBeenCalled();
  });

  const typeGuess = (guessValue, container) => {
    const guessTextField = container.querySelector('[type="text"]');

    fireEvent.change(guessTextField, { target: { value: guessValue } });
  };

  const clickSubmitButton = () => {
    const submitButton = screen.getByText('Submit');

    fireEvent.click(submitButton);
  };

  const pressEnter = (container) => {
    const guessTextField = container.querySelector('[type="text"]')

    fireEvent.keyDown(guessTextField, { key: "enter", keyCode: 13 });
  };
})
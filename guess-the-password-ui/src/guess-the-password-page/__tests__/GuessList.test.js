import React from 'react';
import { render, screen } from '@testing-library/react';
import GuessList from '../GuessList';
import '@testing-library/jest-dom/extend-expect';

describe('When rendering a guess', () => {

  it('should render a list of guesses', () => {
    const guesses = [
      {
        guessText: '12',
        validCharacters: [],
        isCorrect: true,
      },
      {
        guessText: '34',
        validCharacters: [],
        isCorrect: true,
      }
    ]

    render(<GuessList guesses={guesses} />);

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
  });

  it('should display the words "Correct guess" if the guess was correct', () => {
    const guesses = [
      {
        guessText: '12',
        validCharacters: [],
        isCorrect: true,
      }
    ]

    render(<GuessList guesses={guesses} />);

    expect(screen.getByText('Correct guess')).toBeInTheDocument();
    
  });

  it('should display the words "Wrong guess" if the guess was wrong', () => {
    const guesses = [
      {
        guessText: '12',
        validCharacters: ['2'],
        isCorrect: false,
      },
    ]
    
    render(<GuessList guesses={guesses} />);

    expect(screen.getByText('Wrong guess')).toBeInTheDocument();
  });
})
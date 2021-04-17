import React from 'react';
import GuessThePasswordPageTemplate from './GuessThePasswordPageTemplate';
import PageControls from './PageControls';
import GuessList from './GuessList';

const mockGuesses = [
  '234234234',
  '423444333',
  '522343444',
  '242455415',
  '242455435',
  '234234234',
];

const GuessThePasswordPage = () => {
  return (
    <GuessThePasswordPageTemplate
      pageTitle='Guess The Password!'
      passwordHint='12345678'
      guessHistory={<GuessList guesses={mockGuesses} />}
      pageControls={<PageControls />}
    />
  )
}

export default GuessThePasswordPage;
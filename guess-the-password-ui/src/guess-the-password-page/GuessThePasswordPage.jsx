import React from 'react';
import GuessThePasswordPageTemplate from './GuessThePasswordPageTemplate';
import PageControls from './PageControls';
import GuessList from './GuessList';
import CharacterList from './CharacterList';

const mockGuesses = [
  '234234234',
  '423444333',
  '522343444',
  '242455415',
  '242455435',
  '234234234',
  '242455415',
  '242455435',
  '234234234',
  '242455415',
  '242455435',
  '234234231',
];

const mockPasswordHint = '42355523444';
const mockHighlighedCharacters = ['4','3']

const GuessThePasswordPage = () => {
  return (
    <GuessThePasswordPageTemplate
      pageTitle='Guess The Password!'
      passwordHint={<CharacterList characters={mockPasswordHint.split('')} highlightedCharacters={mockHighlighedCharacters} />}
      guessHistory={<GuessList guesses={mockGuesses} />}
      pageControls={<PageControls />}
    />
  )
}

export default GuessThePasswordPage;
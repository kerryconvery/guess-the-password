import React from 'react';
import { arrayOf, string, shape } from 'prop-types';
import { styled } from '@material-ui/core/styles';
import CharacterList from './CharacterList';

const GuessContainer = styled('div')({
  border: '1px solid',
  borderRadius: '4px',
  padding: '5px 0 5px 0',
  marginTop: '40px',
  width: '200px',
  textAlign: 'center',
 'overflow-y': 'auto',
});

const Guess = ({ guessText, correctCharacters }) => {
  return (
    <CharacterList
      characters={guessText.split('')}
      highlightedCharacters={correctCharacters}
      size='small'
    />
  )
}

Guess.propTypes = {
  guessText: string.isRequired,
  correctCharacters: arrayOf(string).isRequired,
};

const GuessList = ({ guesses }) => {
  return (
    guesses.map((guess, index) => (
      <GuessContainer key={index}>
        <Guess guessText={guess.guessText} correctCharacters={guess.correctCharacters} />
      </GuessContainer>
    ))
  )
}

GuessList.propTypes = {
  guesses: arrayOf(shape({
    guessText: string.isRequired,
    correctCharacters: arrayOf(string).isRequired,
  })).isRequired,
}

export default GuessList;
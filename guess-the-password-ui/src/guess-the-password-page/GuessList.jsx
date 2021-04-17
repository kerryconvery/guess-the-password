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
  overflowY: 'auto',
});

const Guess = ({ guessText, validCharacters }) => {
  return (
    <CharacterList
      characters={guessText.split('')}
      highlightedCharacters={validCharacters}
      size='small'
    />
  )
}

Guess.propTypes = {
  guessText: string.isRequired,
  validCharacters: arrayOf(string).isRequired,
};

const GuessList = ({ guesses }) => {
  return (
    guesses.map((guess, index) => (
      <GuessContainer key={index}>
        <Guess guessText={guess.guessText} validCharacters={guess.validCharacters} />
      </GuessContainer>
    ))
  )
}

GuessList.propTypes = {
  guesses: arrayOf(shape({
    guessText: string.isRequired,
    validCharacters: arrayOf(string).isRequired,
  })).isRequired,
}

export default GuessList;
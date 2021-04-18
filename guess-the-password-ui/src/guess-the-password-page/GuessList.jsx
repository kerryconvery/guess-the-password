import React, { Fragment } from 'react';
import { arrayOf, string, shape, bool } from 'prop-types';
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

const AnswerText = styled('span')({
  display: 'block',
  width: '100%',
  textAlign: 'center',
})

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
      <Fragment key={index}>
      <GuessContainer>
        <Guess
          data-test-id='password-guess'
          guessText={guess.guessText}
          validCharacters={guess.validCharacters}
          isCorrect={guess.isCorrect}
        />
      </GuessContainer>
      <AnswerText>{guess.isCorrect ? 'Correct guess' : 'Wrong guess'}</AnswerText>
      </Fragment>
    ))
  )
}

GuessList.propTypes = {
  guesses: arrayOf(shape({
    guessText: string.isRequired,
    validCharacters: arrayOf(string).isRequired,
    isCorrect: bool.isRequired,
  })).isRequired,
}

export default GuessList;
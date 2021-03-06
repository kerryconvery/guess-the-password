import React, { Fragment } from 'react';
import { arrayOf, string, shape, bool, number } from 'prop-types';
import { styled } from '@material-ui/core/styles';
import CharacterList from './CharacterList';

const GuessContainer = styled('div')({
  border: '0.063rem solid',
  borderRadius: '0.25rem',
  padding: '0.313rem 0 0.313rem 0',
  margin: '0 auto 0 auto',
  '&:not(:first-child)':{
    marginTop: '2.5rem',
  },
  width: '12.5rem',
  textAlign: 'center',
  overflowY: 'auto',
});

const AnswerText = styled('span')({
  display: 'block',
  width: '100%',
  textAlign: 'center',
})

const Guess = ({ guessText, validCharacterIndexes }) => {
  return (
    <CharacterList
      characters={guessText.split('')}
      highlightedCharacterIndexes={validCharacterIndexes}
      size='small'
    />
  )
}

Guess.propTypes = {
  guessText: string.isRequired,
  validCharacterIndexes: arrayOf(number).isRequired,
};

const GuessList = ({ guesses }) => {
  return (
    guesses.map((guess, index) => (
      <Fragment key={index}>
      <GuessContainer>
        <Guess
          data-test-id='password-guess'
          guessText={guess.guessText}
          validCharacterIndexes={guess.validCharacterIndexes}
          isCorrect={guess.isCorrect}
        />
      </GuessContainer>
        <AnswerText>
          {`Attempt ${guesses.length - index}: ${guess.isCorrect ? 'Correct guess' : 'Wrong guess'}`}
        </AnswerText>
      </Fragment>
    ))
  )
}

GuessList.propTypes = {
  guesses: arrayOf(shape({
    guessText: string.isRequired,
    validCharacterIndexes: arrayOf(number).isRequired,
    isCorrect: bool.isRequired,
  })).isRequired,
}

export default GuessList;
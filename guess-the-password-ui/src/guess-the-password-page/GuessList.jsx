import React from 'react';
import { arrayOf, string } from 'prop-types';
import { styled, makeStyles } from '@material-ui/core/styles';

const GuessContainer = styled('div')({
  border: '1px solid',
  borderRadius: '4px',
  padding: '5px 0 5px 0',
  marginTop: '40px',
  width: '100px',
  textAlign: 'center',
 'overflow-y': 'auto',
});

const Guess = ({ guessText }) => {
  return <div>{guessText}</div>
}

Guess.propTypes = {
  guessText: string.isRequired,
};

const GuessList = ({ guesses }) => {
  return (
    guesses.map((guess, index) => (
      <GuessContainer key={index}>
        <Guess guessText={guess} />
      </GuessContainer>
    ))
  )
}

GuessList.propTypes = {
  guesses: arrayOf(string).isRequired,
}

export default GuessList;
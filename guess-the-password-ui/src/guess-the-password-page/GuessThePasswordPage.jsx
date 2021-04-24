import React, { useState, useEffect } from 'react';
import { styled } from '@material-ui/core/styles';
import GuessList from './GuessList';
import GuessForm from './GuessForm';
import PasswordHint from './PasswordHint';
import { useServiceApi } from '../providers/ServiceeApiProvider';

const PageContainer = styled('div')({
  display: 'grid',
  gridTemplateRows: '3.125rem 5rem 1fr auto',
  justifyItems: 'center',
  alignItems: 'center',
  minHeight: '100%',
  rowGap: '0.625rem',
  backgroundColor: 'white',
});

const PageTitleContainer = styled('div')({
  gridRowStart: 1,
  gridRowEnd: 1,
});

const PageTitle = styled('h2')({
  margin: 0,
});

const PasswordHintContainer = styled('div')({
  gridRowStart: 2,
  gridRowEnd: 2,
})

const GuessHistoryContainer = styled('div')({
  gridRowStart: 3,
  gridRowEnd: 3,
  position: 'relative',
  maxHeight: '100%',
  height: '100%',
  overflowY: 'auto',
  overflowX: 'hidden',
  width: '100vw',
});

const GuessHistory = styled('div')({
  position: 'absolute',
  minHeight: '4em',
  margin: 'auto',
  width: '100vw',
  height: '100%'
})
const Footer = styled('div')({
  gridRowStart: 4,
  gridRowEnd: 4,
  margin: '0.625rem'
});

const selectGuessFields = (response) => ({
  guessText: response.guess,
  validCharacterIndexes: response.validCharacterIndexes,
  isCorrect: response.isCorrect,
});

const GuessThePasswordPage = () => {
  const [ passwordHint, setPassowordHint ] = useState('');
  const [ guessHistory, setGuessHistory ] = useState([]);
  const [ currentGuess, setCurrentGuess ] = useState();
  const { createPassword, verifyPassword } = useServiceApi();
  
  useEffect(() => {
    createPassword().then(data => setPassowordHint(data.hint));
  }, []);

  const handleSubmit = async () => {
    const response = await verifyPassword(passwordHint, currentGuess);

    setGuessHistory([selectGuessFields(response), ...guessHistory]);
  }

  return (
    <PageContainer>
      <PageTitleContainer>
        <PageTitle>Guess The Password!</PageTitle>
      </PageTitleContainer>
      <PasswordHintContainer>
        <PasswordHint passwordHint={passwordHint} />
      </PasswordHintContainer>
      <GuessHistoryContainer>
        <GuessHistory>
          <GuessList guesses={guessHistory} />
        </GuessHistory>
      </GuessHistoryContainer>
      <Footer>
        <GuessForm guess={currentGuess} onInputGuess={setCurrentGuess} onSubmit={handleSubmit} />
      </Footer>
    </PageContainer>
  )
}

export default GuessThePasswordPage;
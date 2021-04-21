import React, { useState, useEffect } from 'react';
import GuessThePasswordPageTemplate from './GuessThePasswordPageView';
import GuessList from './GuessList';
import GuessForm from './GuessForm';
import PasswordHint from './PasswordHint';
import { useServiceApi } from '../providers/ServiceeApiProvider';

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
    <GuessThePasswordPageView
      pageTitle='Guess The Password!'
      passwordHint={<PasswordHint passwordHint={passwordHint} />}
      guessHistory={<GuessList guesses={guessHistory} />}
      guessForm={<GuessForm guess={currentGuess} onInputGuess={setCurrentGuess} onSubmit={handleSubmit} />}
    />
  )
}

export default GuessThePasswordPage;
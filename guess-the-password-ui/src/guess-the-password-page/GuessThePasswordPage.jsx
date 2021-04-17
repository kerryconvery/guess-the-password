import React, { useState, useEffect } from 'react';
import GuessThePasswordPageTemplate from './GuessThePasswordPageTemplate';
import PageControls from './PageControls';
import GuessList from './GuessList';
import CharacterList from './CharacterList';
import { useServiceApi } from '../providers/ServiceeApiProvider';

const selectGuessFields = (response) => ({
  guessText: response.guess,
  validCharacters: response.validCharacters ? response.validCharacters : [],
});

const GuessThePasswordPage = () => {
  const [ passwordHint, setPassowordHint ] = useState('');
  const [ guessHistory, setGuessHistory ] = useState([]);
  const [ currentGuess, setCurrentGuess ] = useState('');
  const { createPassword, verifyPassword } = useServiceApi();

  useEffect(() => {
    createPassword().then(data => setPassowordHint(data.hint));
  }, []);

  const handleSubmit = async () => {
    const response = await verifyPassword(passwordHint, currentGuess);

    console.log(response);

    setGuessHistory([...guessHistory, selectGuessFields(response)]);
  }

  console.log(guessHistory[0]);

  return (
    <GuessThePasswordPageTemplate
      pageTitle='Guess The Password!'
      passwordHint={<CharacterList characters={passwordHint.split('')} size='medium' />}
      guessHistory={<GuessList guesses={guessHistory} />}
      pageControls={<PageControls onInputGuess={setCurrentGuess} onSubmit={handleSubmit} />}
    />
  )
}

export default GuessThePasswordPage;
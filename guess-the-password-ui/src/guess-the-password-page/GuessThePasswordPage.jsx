import React from 'react';
import GuessThePasswordPageTemplate from './GuessThePasswordPageTemplate';
import PageControls from './PageControls';
import GuessList from './GuessList';
import CharacterList from './CharacterList';

const mockGuesses = [{
  guessText: '234234234',
  correctCharacters: ['2','4'],
}, 
{
  guessText: '234234234',
  correctCharacters: ['3'],
},
{
  guessText: '234234234',
  correctCharacters: [],
},
{
  guessText: '234234234',
  correctCharacters: ['2','4'],
}, 
{
  guessText: '234234234',
  correctCharacters: ['3'],
},
{
  guessText: '234234234',
  correctCharacters: [],
},
{
  guessText: '234234234',
  correctCharacters: ['2','4'],
}, 
{
  guessText: '234234234',
  correctCharacters: ['3'],
},
{
  guessText: '234234234',
  correctCharacters: [],
},
{
  guessText: '234234234',
  correctCharacters: ['2','4'],
}, 
{
  guessText: '234234234',
  correctCharacters: ['3'],
},
{
  guessText: '234234234',
  correctCharacters: [],
}
];

const mockPasswordHint = '42355523444';

const GuessThePasswordPage = () => {
  return (
    <GuessThePasswordPageTemplate
      pageTitle='Guess The Password!'
      passwordHint={<CharacterList characters={mockPasswordHint.split('')} size='medium' />}
      guessHistory={<GuessList guesses={mockGuesses} />}
      pageControls={<PageControls />}
    />
  )
}

export default GuessThePasswordPage;
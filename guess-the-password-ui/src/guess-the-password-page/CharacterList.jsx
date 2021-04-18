import React from 'react';
import { arrayOf, string, bool, oneOf } from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(() => ({
  character: ({ isHighlighted, size }) => ({
    backgroundColor: isHighlighted ? 'green' : 'white',
    color: isHighlighted ? 'white' : 'black',
    fontSize: size === 'small' ? '1em' : '2em',
    padding: '5px',
  }),
}))

const supportedSizes = ['small', 'medium'];

const Character = ({ character, isHighlighted, size }) => {
  const classes = styles({ isHighlighted, size });

  return <span className={classes.character}>{character}</span>
}

Character.propTypes = {
  character: string.isRequired,
  isHighlighted: bool.isRequired,
  size: oneOf(supportedSizes).isRequired,
}

Character.defaultProps = {
  isHighlighted: false,
}

const CharacterList = ({ characters, highlightedCharacters, size }) => {
  return characters.map((character, index) => (
    <Character
      key={index}
      character={character}
      isHighlighted={highlightedCharacters.includes(character)}
      size={size}
    />
  ))
}

CharacterList.propTypes = {
  characters: arrayOf(string).isRequired,
  highlightedCharacters: arrayOf(string),
  size: oneOf(supportedSizes),
}

CharacterList.defaultProps = {
  highlightedCharacters: [],
  size: supportedSizes[0]
}

export default CharacterList;
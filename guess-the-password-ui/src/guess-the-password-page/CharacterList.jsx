import React from 'react';
import { arrayOf, string, bool, oneOf, number } from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(() => ({
  character: ({ isHighlighted, size }) => ({
    backgroundColor: isHighlighted ? 'green' : 'white',
    color: isHighlighted ? 'white' : 'black',
    fontSize: size === 'small' ? '1em' : '2em',
    padding: '0.313rem',
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

const CharacterList = ({ characters, highlightedCharacterIndexes, size }) => {
  return characters.map((character, index) => (
    <Character
      key={index}
      character={character}
      isHighlighted={highlightedCharacterIndexes.includes(index)}
      size={size}
    />
  ))
}

CharacterList.propTypes = {
  characters: arrayOf(string).isRequired,
  highlightedCharacterIndexes: arrayOf(number),
  size: oneOf(supportedSizes),
}

CharacterList.defaultProps = {
  highlightedCharacterIndexes: [],
  size: supportedSizes[0]
}

export default CharacterList;
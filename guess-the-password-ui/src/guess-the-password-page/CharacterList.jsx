import React from 'react';
import { arrayOf, string, bool } from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  character: props => ({
    backgroundColor: props.isHighlighted ? 'green' : 'white',
    color: props.isHighlighted ? 'white' : 'black',
    padding: '5px'
  }),
}))

const Character = ({ character, isHighlighted }) => {
  const classes = useStyles({ isHighlighted });

  return <span className={classes.character}>{character}</span>
}

Character.propTypes = {
  character: string.isRequired,
  isHighlighted: bool,
}

Character.defaultProps = {
  isHighlighted: false,
}

const CharacterList = ({ characters, highlightedCharacters }) => {
  return characters.map((character, index) => (
    <Character
      key={index}
      character={character}
      isHighlighted={highlightedCharacters.includes(character)}
    />
  ))
}

CharacterList.propTypes = {
  characters: arrayOf(string).isRequired,
  highlightedCharacters: arrayOf(string),
}

CharacterList.defaultProps = {
  highlightedCharacters: [],
}

export default CharacterList;
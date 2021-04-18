import React from 'react';
import _isEmpty from 'lodash/isEmpty';
import { func, string } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  submitButton: {
    width: '80px',
    margin: 'auto',
    marginTop: '20px',
  }
}));

const GuessForm = ({ guess, onInputGuess, onSubmit }) => {
  const classes = useStyles();

  const maybeSubmitForm = (event) => {
    if (!_isEmpty(guess)) {
      onSubmit(event);
    }
  }
  const handleInputGuess = (event) => {
    onInputGuess(event.target.value)
  }

  const handleKeyPress = (event) => {
    if(event.keyCode === 13) {
      maybeSubmitForm();
    }
  }

  return (
    <FormControl>
      <TextField
        inputProps={{ maxLength: 8 }}
        variant="outlined"
        label='Enter guess here'
        onChange={handleInputGuess}
        onKeyDown={handleKeyPress}
      />
      <Button className={classes.submitButton} variant="outlined" color="primary" onClick={maybeSubmitForm}>
        Submit
      </Button>
    </FormControl>
  )
}

GuessForm.propTypes = {
  guess: string,
  onInputGuess: func.isRequired,
  onSubmit: func.isRequired,
}

GuessForm.defaultProps = {
  guess: '',
}

export default GuessForm;
import React from 'react';
import { func } from 'prop-types';
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

const PageControls = ({ onInputGuess, onSubmit }) => {
  const classes = useStyles();

  const handleInputGuess = (event) => {
    onInputGuess(event.target.value)
  }

  return (
    <FormControl>
      <TextField
        inputProps={{ maxLength: 8 }}
        variant="outlined"
        label='Enter guess here'
        onChange={handleInputGuess}
      />
      <Button className={classes.submitButton} variant="outlined" color="primary" onClick={onSubmit}>
        Submit
      </Button>
    </FormControl>
  )
}

PageControls.propTypes = {
  onInputGuess: func.isRequired,
  onSubmit: func.isRequired,
}

export default PageControls;
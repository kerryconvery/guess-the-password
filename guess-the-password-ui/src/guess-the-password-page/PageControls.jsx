import React from 'react';
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

const PageControls = () => {
  const classes = useStyles();

  return (
    <FormControl>
      <TextField variant="outlined" label='Enter guess here' />
      <Button  className={classes.submitButton} variant="outlined" color="primary">Submit</Button>
    </FormControl>
  )
}

export default PageControls;
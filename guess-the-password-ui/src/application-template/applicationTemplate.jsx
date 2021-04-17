import React from 'react';
import { node } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    minHeight: '100vh',
  }
}));

const ApplicationTemplate = ({ children }) => {
  const classes = useStyles();
 
  return (
    <div className={classes.container}>
      {children}
    </div>
  )
}

ApplicationTemplate.propTypes = {
  children: node.isRequired,
}

export default ApplicationTemplate;

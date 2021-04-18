import React from 'react';
import { string } from 'prop-types';
import { styled } from '@material-ui/core/styles';
import CharacterList from './CharacterList';

const Caption = styled('div')({
  textAlign: 'center'
});

const BorderBox = styled('div')({
  border: '2px dotted',
  borderRadius: '4px',
  padding: '5px',
})

const PasswordHint = ({ passwordHint }) => (
  <>
    <Caption data-test-id='password-hint'>Password hint</Caption>
    <BorderBox>
      <CharacterList size='medium' characters={passwordHint.split('')} />
    </BorderBox>
  </>
)

PasswordHint.propTypes = {
  passwordHint: string.isRequired,
}

export default PasswordHint;
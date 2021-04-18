import React from 'react';
import { node, string } from 'prop-types';
import { styled } from '@material-ui/core/styles';

const PageContainer = styled('div')({
  display: 'grid',
  gridTemplateRows: '50px 50px 50vh 1fr auto',
  justifyItems: 'center',
  alignItems: 'center',
  minHeight: '100%',
  backgroundColor: 'white',
});

const PageTitleContainer = styled('div')({
  gridRowStart: 1,
  gridRowEnd: 1,
});

const PageTitle = styled('h1')({
  margin: 0,
});

const PasswordHintContainer = styled('div')({
  gridRowStart: 2,
  gridRowEnd: 2,
})

const GuessHistoryContainer = styled('div')({
  gridRowStart: 3,
  gridRowEnd: 3,
  height: '100%',
  overflowY: 'auto',
  width: '100%',
});

const GuessHistory = styled('div')({
  margin: 'auto',
  width: '200px',
  height: '100%'
})
const Footer = styled('div')({
  gridRowStart: 5,
  gridRowEnd: 5,
  margin: '10px'
});

const GuessThePasswordPageTemplate = ({ pageTitle, passwordHint, guessHistory, guessForm }) => {
  return (
    <PageContainer>
      <PageTitleContainer>
        <PageTitle>{pageTitle}</PageTitle>
      </PageTitleContainer>
      <PasswordHintContainer data-test-id='password-hint'>
        {passwordHint}
      </PasswordHintContainer>
      <GuessHistoryContainer>
        <GuessHistory>
        {guessHistory}
        </GuessHistory>
      </GuessHistoryContainer>
      <Footer>
        {guessForm}
      </Footer>
    </PageContainer>
  )
}

GuessThePasswordPageTemplate.propTypes = {
  pageTitle: string.isRequired,
  passwordHint: node.isRequired,
  guessHistory: node.isRequired,
  guessForm: node.isRequired,
}

export default GuessThePasswordPageTemplate;
import React from 'react';
import { node, string } from 'prop-types';
import { styled } from '@material-ui/core/styles';

const PageContainer = styled('div')({
  display: 'grid',
  gridTemplateRows: '50px 50px 70vh 1fr auto',
  justifyItems: 'center',
  alignItems: 'center',
  minHeight: '100%'
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

const PasswordHint = styled('h2')({
  margin: 0,
})

const GuessHistoryContainer = styled('div')({
  gridRowStart: 3,
  gridRowEnd: 3,
  height: '100%',
  overflowY: 'auto'
});

const Footer = styled('div')({
  gridRowStart: 5,
  gridRowEnd: 5,
});

const GuessThePasswordPageTemplate = ({ pageTitle, passwordHint, guessHistory, pageControls }) => {
  return (
    <PageContainer>
      <PageTitleContainer>
        <PageTitle>{pageTitle}</PageTitle>
      </PageTitleContainer>
      <PasswordHintContainer>
        {passwordHint}
      </PasswordHintContainer>
      <GuessHistoryContainer>
        {guessHistory}
      </GuessHistoryContainer>
      <Footer>
        {pageControls}
      </Footer>
    </PageContainer>
  )
}

GuessThePasswordPageTemplate.propTypes = {
  pageTitle: string.isRequired,
  passwordHint: node.isRequired,
  guessHistory: node.isRequired,
  pageControls: node.isRequired,
}

export default GuessThePasswordPageTemplate;
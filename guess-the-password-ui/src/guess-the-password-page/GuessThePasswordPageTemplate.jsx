import React from 'react';
import { node, string } from 'prop-types';
import { styled } from '@material-ui/core/styles';

const PageContainer = styled('div')({
  display: 'grid',
  gridTemplateRows: '50px 80px 1fr auto',
  justifyItems: 'center',
  alignItems: 'center',
  minHeight: '100%',
  rowGap: '10px',
  backgroundColor: 'white',
});

const PageTitleContainer = styled('div')({
  gridRowStart: 1,
  gridRowEnd: 1,
});

const PageTitle = styled('h2')({
  margin: 0,
});

const PasswordHintContainer = styled('div')({
  gridRowStart: 2,
  gridRowEnd: 2,
})

const GuessHistoryContainer = styled('div')({
  gridRowStart: 3,
  gridRowEnd: 3,
  position: 'relative',
  maxHeight: '100%',
  height: '100%',
  overflowY: 'auto',
  overflowX: 'hidden',
  width: '100vw',
});

const GuessHistory = styled('div')({
  position: 'absolute',
  minHeight: '4em',
  margin: 'auto',
  width: '100vw',
  height: '100%'
})
const Footer = styled('div')({
  gridRowStart: 4,
  gridRowEnd: 4,
  margin: '10px'
});

const GuessThePasswordPageTemplate = ({ pageTitle, passwordHint, guessHistory, guessForm }) => {
  return (
    <PageContainer>
      <PageTitleContainer>
        <PageTitle>{pageTitle}</PageTitle>
      </PageTitleContainer>
      <PasswordHintContainer>
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
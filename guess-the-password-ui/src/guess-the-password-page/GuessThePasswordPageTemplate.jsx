import React from 'react';
import { node, string } from 'prop-types';
import { styled } from '@material-ui/core/styles';

const PageContainer = styled('div')({
  display: 'grid',
  gridTemplateRows: '50px 20px 1fr auto',
  justifyItems: 'center',
  minHeight: '100%'
});

const PageTitleContainer = styled('div')({
  gridRowStart: 1,
  gridRowEnd: 1,
  // borderBottom: '1px solid'
});

const PageTitle = styled('h1')({
  margin: 0,
});

const PasswordHintContainer = styled('div')({
  gridRowStart: 2,
  gridRowEnd: 2,
})

const PasswordHintBorder = styled('div')({
  border: '2px dotted',
  borderRadius: '4px',
  width: '150px',
  margin: 'auto',
  textAlign: 'center',
});

const PasswordHint = styled('h2')({
  margin: 0,
})

const GuessHistoryContainer = styled('div')({
  gridRowStart: 3,
  gridRowEnd: 3,
});

const GuessHistoryScrollBox = styled('div')({
  minHeight: 'auto',
  overflowY: 'scroll',
});

const ControlsContainer = styled('div')({
  gridColumnStart: 1,
  gridColumnEnd: 1,
  gridRowStart: 3,
  gridRowEnd: 3,
  position: 'absolute',
  maxHeight: '50%',
  textAlign: 'center',
  overflowY: 'auto',
});

const Footer = styled('div')({
  gridRowStart: 4,
  gridRowEnd: 4,
});

const GuessThePasswordPageTemplate = ({ pageTitle, passwordHint, guessHistory, pageControls }) => {
  return (
    <PageContainer>
      <PageTitleContainer>
        <PageTitle>{pageTitle}</PageTitle>
      </PageTitleContainer>
      <PasswordHintContainer>
        <PasswordHint>{passwordHint}</PasswordHint>
      </PasswordHintContainer>
      <GuessHistoryContainer>
        <GuessHistoryScrollBox>
          {guessHistory}
        </GuessHistoryScrollBox>
      </GuessHistoryContainer>
      <Footer>
        {pageControls}
      </Footer>
    </PageContainer>
  )
}

GuessThePasswordPageTemplate.propTypes = {
  pageTitle: string.isRequired,
  passwordHint: string.isRequired,
  guessHistory: node.isRequired,
  pageControls: node.isRequired,
}

export default GuessThePasswordPageTemplate;
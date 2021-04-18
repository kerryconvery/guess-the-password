import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterList from '../CharacterList';
import '@testing-library/jest-dom/extend-expect';

describe('When rendering characters', () => {
  const characters = ['1', '2', '3'];

  it('should display all characters', () => {
    render(<CharacterList characters={characters} />);

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('should highlight highlighted characters in green', () => {
    const highlightedCharacters = ['2'];


    render(<CharacterList characters={characters} highlightedCharacters={highlightedCharacters}/>);

    const highlightedCharacter = screen.getByText('2');

    expect(highlightedCharacter).toHaveStyle('background-color: green');
    expect(highlightedCharacter).toHaveStyle('color: white');
  });

  it('should not highlight non highlighted characters', () => {
    const highlightedCharacters = ['2'];


    render(<CharacterList characters={characters} highlightedCharacters={highlightedCharacters}/>);

    const highlightedCharacter = screen.getByText('1');

    expect(highlightedCharacter).toHaveStyle('background-color: white');
    expect(highlightedCharacter).toHaveStyle('color: black');
  });

  it('should render small size characters', () => {
    render(<CharacterList characters={characters} size='small' />);

    const character = screen.getByText('1');

    expect(character).toHaveStyle('font-size: 1em')
  });

  it('should render medium size characters', () => {
    render(<CharacterList characters={characters} size='medium' />);

    const character = screen.getByText('1');

    expect(character).toHaveStyle('font-size: 2em')
  });
})
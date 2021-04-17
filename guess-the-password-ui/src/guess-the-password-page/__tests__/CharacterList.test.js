import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import CharacterList from '../CharacterList';
import '@testing-library/jest-dom/extend-expect';

describe('When rendering characters', () => {
  const characters = ['1', '2'];

  it('should display all characters', () => {
    render(<CharacterList characters={characters} />);

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });
})
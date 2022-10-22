import App from './App'
import { fireEvent, render, screen } from '@testing-library/react';

describe('App', () => {
  test('should be able to render without data', () => {
    render(<App />)
  })

  test('should be able to perform actions in component', () => {
    render(<App />)

    const createButton = screen.getByRole('button');
    fireEvent.click(createButton);
    expect(screen.getByRole('list').childNodes.length).toBe(0)

    const input = screen.getByLabelText('todo-name-input');
    fireEvent.change(input, { target: { value: 'testing' } });
    fireEvent.click(createButton);
    expect(screen.getByRole('list').childNodes.length).toBe(1)

    const delButton = screen.getAllByRole('button')[0];
    fireEvent.click(delButton);
    expect(screen.getByRole('list').childNodes.length).toBe(0)
  })
})

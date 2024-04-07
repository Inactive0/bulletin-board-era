// src/__tests__/AppIntegration.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('adds and displays ads', () => {
  render(<App />);

  fireEvent.change(screen.getByPlaceholderText('Добавить объявление'), { target: { value: 'New Ad' } });
  fireEvent.click(screen.getByText('Добавить'));

  expect(screen.getByText('New Ad')).toBeInTheDocument();
});

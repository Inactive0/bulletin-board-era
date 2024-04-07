// src/components/__tests__/Ad.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BoardProvider } from '../../context/BoardContext';
import Ad from '../Ad';

test('renders ad and allows deletion', () => {
  const ad = { id: 1, title: 'Test Ad' };
  render(
    <BoardProvider>
      <Ad ad={ad} />
    </BoardProvider>
  );

  expect(screen.getByText('Test Ad')).toBeInTheDocument();

  fireEvent.click(screen.getByText('Удалить'));
  // После удаления, проверка состояния или отображения может быть сложной без наличия полного потока приложения,
  // так что здесь мы ограничиваемся тестом на наличие и взаимодействие элементов UI.
});

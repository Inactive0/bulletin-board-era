// src/context/__tests__/useBoard.test.js
import { renderHook, act } from '@testing-library/react-hooks';
import { useBoard } from '../BoardContext';

test('should add ad', () => {
  const { result } = renderHook(() => useBoard());

  act(() => {
    result.current.addAd({ title: 'Test Ad', id: 1 });
  });

  expect(result.current.ads.length).toBe(1);
  expect(result.current.ads[0].title).toBe('Test Ad');
});

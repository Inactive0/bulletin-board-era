import React from 'react';
import { BoardProvider } from './context/BoardContext';
import Board from './components/Board';
import AdForm from './components/AdForm';
import './App.css'; // Импортируем стили

function App() {
  return (
    <BoardProvider>
      <div className="container"> {/* Добавляем класс контейнера для центрирования и ограничения ширины */}
        <h1>Интерактивная доска объявлений</h1>
        <AdForm />
        <Board />
      </div>
    </BoardProvider>
  );
}

export default App;

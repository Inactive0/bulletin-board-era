import React from 'react';
import { useBoard } from '../context/BoardContext';

const formatText = text => {
    // Выделяем жирный текст
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Выделяем ссылки
    text = text.replace(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g, '<a href="mailto:$1">$1</a>');
    return text;
};

const Ad = ({ ad }) => {
    const { deleteAd } = useBoard();

    return (
        <div className="ad">
            <div className="formatted-text" dangerouslySetInnerHTML={{ __html: formatText(ad.title) }} />
            <button onClick={() => deleteAd(ad.id)}>Удалить</button>
        </div>
    );
};

export default Ad;

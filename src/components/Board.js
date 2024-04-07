import React from 'react';
import { useBoard } from '../context/BoardContext';
import Ad from './Ad';

const Board = () => {
    const { ads } = useBoard();

    return (
        <div>
            {ads.map(ad => (
                <Ad key={ad.id} ad={ad} />
            ))}
        </div>
    );
};

export default Board;

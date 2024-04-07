import React, { createContext, useState, useContext } from 'react';

const BoardContext = createContext();

export const useBoard = () => useContext(BoardContext);

export const BoardProvider = ({ children }) => {
    const [ads, setAds] = useState([]);

    const addAd = ad => {
        setAds([...ads, { ...ad, id: Date.now() }]);
    };

    const deleteAd = id => {
        setAds(ads.filter(ad => ad.id !== id));
    };

    return (
        <BoardContext.Provider value={{ ads, addAd, deleteAd }}>
            {children}
        </BoardContext.Provider>
    );
};

import { createContext, useState, useContext, useEffect } from "react";

const GameContext = createContext();

export const useGameContext = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
    const [downloaded, setDownloaded] = useState([]);

    useEffect(() => {
        const storedDownloaded = sessionStorage.getItem('downloaded');

        if (storedDownloaded)
            setDownloaded(JSON.parse(storedDownloaded));
    }, []);

    useEffect(() => {
        sessionStorage.setItem('downloaded', JSON.stringify(downloaded));
    }, [downloaded]);

    const addToDownloaded = (gameToAdd) => {
        setDownloaded(previous => [...previous, gameToAdd]);
    }

    const removeFromDownloaded = (gameId) => {
        setDownloaded(previous => previous.filter(game => game.id !== gameId));
    }

    const isDownloaded = (gameId) => {
        return downloaded.some(game => game.id === gameId);
    }

    const value = {
        downloaded,
        addToDownloaded,
        removeFromDownloaded,
        isDownloaded
    };

    return <GameContext.Provider value={value}>
        {children}
    </GameContext.Provider>
}
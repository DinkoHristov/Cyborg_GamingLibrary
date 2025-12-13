import { createContext, useState, useContext, useEffect } from "react";

const GameContext = createContext();

export const useGameContext = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem('favorites');

        if (storedFavorites)
            setFavorites(JSON.parse(storedFavorites));
    }, []);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const addToFavorites = (movieToAdd) => {
        setFavorites(previous => [...previous, movieToAdd]);
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(previous => previous.filter(movie => movie.id !== movieId));
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId);
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    };

    return <GameContext.Provider value={value}>
        {children}
    </GameContext.Provider>
}
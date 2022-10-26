import { createContext, useContext, useState } from "react";

export const GameContext = createContext();

export const GameProvider = ({children}) => {
    const getMaxScore = () => {
        const savedMaxScore = localStorage.getItem("maxScore");
        return savedMaxScore ? savedMaxScore : 0;
    }

    const [items, setItems] = useState([1,2,3,4,5,6,7,8,9,10,11,12]);
    const [score, setScore] = useState(0);
    const [maxScore, setMaxScore] = useState(getMaxScore());
    

    const initGame = () => {
        setItems([1,2,3,4,5,6,7,8,9,10,11,12]);
        console.log("the game was started.")
    }

    const values = {
        items,
        initGame,
        maxScore,
        score,
        setScore,
        setMaxScore
    };
    
    return <GameContext.Provider value={values}>{children}</GameContext.Provider>
}

export const useGame = () => useContext(GameContext);
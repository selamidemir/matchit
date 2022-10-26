import { createContext, useContext } from "react";

export const GameContext = createContext();

export const GameProvider = ({children}) => {
    const values = {

    };
    return <GameContext.Provider value={values}>{children}</GameContext.Provider>
}

export const useGame = () => useContext(GameContext);
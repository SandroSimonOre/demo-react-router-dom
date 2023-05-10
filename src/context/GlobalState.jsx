import { useContext, createContext, useState } from 'react';

/* const initialState = {
    statusMenu: 'hidden',
}; */

export const Context = createContext()

export const useGlobalState = () => {
    return useContext(Context);
    //return context;
};

export const GlobalProvider = ({ children }) => {

    const [ showMenu, setShowMenu ] = useState(false)

    return (
        <Context.Provider
            value={
                {
                    showMenu,
                    setShowMenu
                }
            }
        >
            { children }
        </Context.Provider>
    )
}
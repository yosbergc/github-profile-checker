import React from "react";
let context = React.createContext();

function GiveContext({children}) {
    let [currentSearch, setCurrentSearch] = React.useState('');
    let [currentUser, setCurrentUser] = React.useState();
    let [repositories, setRepositories] = React.useState([]);
    let [isLoading, setLoading] = React.useState(true);
    let [errorFound, setErrorFound] = React.useState(false);
    
    function useThrotling (state, delay) {
        let [currentHandler, setCurrentHandler] = React.useState(state);
        React.useEffect(() => {
            let timer = setTimeout(() => {
                setCurrentHandler(state)
            }, delay);
            return () => {
                clearTimeout(timer)
            }
        }, [state, delay])
        return currentHandler;
    }
    return (<context.Provider value={{
        currentSearch,
        setCurrentSearch,
        useThrotling,
        currentUser,
        setCurrentUser,
        isLoading,
        setLoading,
        repositories,
        setRepositories,
        errorFound,
        setErrorFound
    }}>
        {children}
    </context.Provider>)
}
export {GiveContext, context}
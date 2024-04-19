import React from "react"
function useMakeRequest() {
    let [currentSearch, setCurrentSearch] = React.useState('');
    return [currentSearch, setCurrentSearch];
}
function useManejador (state, delay) {
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
function makeAPIRequest() {
    
}
export {useMakeRequest, useManejador}
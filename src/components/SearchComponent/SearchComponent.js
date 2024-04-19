import './searchcomponent.css'
import SearchIcon from '../../svg/Search.svg'
import React from 'react'
import { context } from '../Context/context'
function SearchComponent() {
    let {currentSearch, setCurrentSearch, setCurrentUser, useThrotling, setLoading} = React.useContext(context);
    let handler = useThrotling(currentSearch, 500);

    async function makeAPIRequest(user) {
            try {
                let username = user || 'github'
                let res = await fetch(`https://api.github.com/users/${username}`);
                let data = await res.json();
                setCurrentUser(data)
                setLoading(false);
            } catch(error) {
                
                setLoading(false);
            }
    }
    
    React.useEffect(() => {
        makeAPIRequest(handler)
    }, [handler])

    return (<section className='inputContainer'>
        <img src={SearchIcon} alt='Search Icon'></img>
        <input type="text" placeholder='username' onChange={(e) => {
            setCurrentSearch(e.target.value)
        }} value={currentSearch}></input>
    </section>)
}
export {SearchComponent}
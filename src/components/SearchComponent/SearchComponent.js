import './searchcomponent.css'
import SearchIcon from '../../svg/Search.svg'
import React from 'react'
import { context } from '../Context/context'
function SearchComponent() {
    let {currentSearch, setCurrentSearch, setCurrentUser, useThrotling, setLoading, setRepositories, setErrorFound} = React.useContext(context);
    let handler = useThrotling(currentSearch, 500);

    function makeAPIRequest(user) {
        let username = user || 'github'
        fetch(`https://api.github.com/users/${username}`)
        .then(res => {
            if (!res.ok) {
                setErrorFound(true);
            } else {
                res.json()
                .then(data => {
                    setCurrentUser(data)
                    fetch(`https://api.github.com/users/${username}/repos`)
                    .then(res => res.json())
                    .then(data => {
                        setRepositories(data);
                    })
                    setErrorFound(false)
                    setLoading(false);
                }).catch((error) => console.log(error))
            }
        })
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
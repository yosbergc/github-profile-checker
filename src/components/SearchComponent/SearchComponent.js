import './searchcomponent.css'
import SearchIcon from '../../svg/Search.svg'
import React from 'react'
import {useManejador} from '../GetUserInfo/index'
function SearchComponent({currentSearch, setCurrentSearch}) {
    let handler = useManejador(currentSearch, 1000);
    React.useEffect(() => {
        console.log(handler)
    }, [handler])
    return (<section className='inputContainer'>
        <img src={SearchIcon} alt='Search Icon'></img>
        <input type="text" placeholder='username' onChange={(e) => {
            setCurrentSearch(e.target.value)
        }} value={currentSearch}></input>
    </section>)
}
export {SearchComponent}
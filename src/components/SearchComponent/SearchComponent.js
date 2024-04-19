import './searchcomponent.css'
import SearchIcon from '../../svg/Search.svg'
function SearchComponent() {
    return (<section className='inputContainer'>
        <img src={SearchIcon} alt='Search Icon'></img>
        <input type="text" placeholder='username'></input>
    </section>)
}
export {SearchComponent}
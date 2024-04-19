import './UserPhoto.css'
import React from 'react'
import { context } from '../Context'
function UserPhoto() {
    let {currentUser} = React.useContext(context);
    
    return (<figure>
        <img src={currentUser.avatar_url} alt='Github User Profile'></img>
    </figure>)
}
export {UserPhoto}
import './UserPhoto.css'
import React from 'react'
import { context } from '../Context/context'
import { Loading } from '../Loading/loading';
function UserPhoto() {
    let {currentUser} = React.useContext(context);
    return (<figure>
        {currentUser ? <img src={currentUser.avatar_url} alt='Github User Profile' onDragStart={(e) => {
            e.preventDefault()
        }}></img> : <Loading/>}
        
    </figure>)
}
export {UserPhoto}
import './UserPhoto.css'
function UserPhoto({photo}) {
    return (<figure>
        <img src={photo} alt='Github User Profile'></img>
    </figure>)
}
export {UserPhoto}
import './userinfo.css'
function UserInfo({username, userDescription}) {
    return (<>
        <h2>{username}</h2>
        <p>{userDescription}</p>
    </>)
}
export {UserInfo}
import React from 'react';
import { SearchComponent } from '../SearchComponent/SearchComponent';
import { UserPhoto } from '../UserPhoto/UserPhoto';
import { ShortComponent } from '../ShortComponent';
import { context } from '../Context/context';
import { Loading } from '../Loading/loading';
import { UserInfo } from '../UserInfo';

function AppUI() {
  let {currentUser} = React.useContext(context)
    return (<>
    <header>
        <SearchComponent/>
      </header>
      <main>
      <section className='UpperBody'>
        <section className='userProfilePhoto'>
          <UserPhoto/>
        </section>
        <section className='userSummary'>
          {!currentUser ? <Loading/> : <>
          <ShortComponent name={"Followers"} property={currentUser.followers}/>
          <ShortComponent name={"Following"} property={currentUser.following}/>
          <ShortComponent name={"Location"} property={currentUser.location}/>
          </>}
        </section>
      </section>
      <section className='userInfo'>
        {!currentUser ? <Loading/> : <UserInfo username={currentUser.name} userDescription={currentUser.bio}/>}
      </section>
      <section className='repositoriesContainer'>
        
      </section>
      </main>
      </>)
}
export {AppUI};
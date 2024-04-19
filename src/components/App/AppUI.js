import { SearchComponent } from '../SearchComponent/SearchComponent';
import { UserPhoto } from '../UserPhoto/UserPhoto';
import { ShortComponent } from '../ShortComponent';
import { context } from '../Context/context';
import React from 'react';
function AppUI() {
  let {currentUser} = React.useContext(context)
    return (<>
    <header>
        <SearchComponent/>
      </header>
      <section className='UpperBody'>
        <section className='userProfilePhoto'>
          <UserPhoto/>
        </section>
        <section className='userSummary'>
          <ShortComponent name={"Followers"} property={currentUser.followers}/>
          <ShortComponent name={"Following"} property={currentUser.following}/>
          <ShortComponent name={"Location"} property={currentUser.location}/>
        </section>
      </section>
      </>)
}
export {AppUI};
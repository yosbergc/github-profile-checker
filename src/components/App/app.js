import './App.css';
import { SearchComponent } from '../SearchComponent/SearchComponent';
import { UserPhoto } from '../UserPhoto/UserPhoto';
import { GiveContext } from '../Context';
import React from 'react';
function App() {
  
  return (
    <GiveContext>
    <header>
      <SearchComponent/>
    </header>
    <section className='UpperBody'>
      <section className='userProfilePhoto'>
        <UserPhoto/>
      </section>
      <section className='userSummary'>
        
      </section>
    </section>
    </GiveContext>
  );
}

export default App;

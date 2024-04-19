import React from 'react';
import { SearchComponent } from '../SearchComponent/SearchComponent';
import { UserPhoto } from '../UserPhoto/UserPhoto';
import { ShortComponent } from '../ShortComponent';
import { context } from '../Context/context';
import { Loading } from '../Loading/loading';
import { UserInfo } from '../UserInfo';
import { RepositoryComponent } from '../RepositoryComponent/RepositoryComponent';
import { ShowMore } from '../ShowMore';

function AppUI() {
  let {currentUser, repositories} = React.useContext(context)
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
        {!currentUser && <Loading/>}
        {currentUser && repositories.length > 0 && repositories.map((repository, index) => {
          if (index >= 4) {
            return [];
          }
        return <RepositoryComponent
          repositoryName={repository.name}
          repositoryDescription={repository.description}
          license={repository.license}
          forks={repository.forks}
          stars={repository.stargazers_count}
          key={repository.name}/>
          })}
      </section>
      <section>
        {currentUser && repositories.length > 0 && <ShowMore></ShowMore>}
      </section>
      </main>
      </>)
}
export {AppUI};
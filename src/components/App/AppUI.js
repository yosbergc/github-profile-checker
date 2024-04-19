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
  let [repositoryMax, setRepositoryMax] = React.useState(4);
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
          if (index >= repositoryMax) {
            return [];
          }
        return <RepositoryComponent
          repositoryName={repository.name}
          repositoryDescription={repository.description}
          license={repository.license}
          forks={repository.forks}
          stars={repository.stargazers_count}
          key={repository.name}
          link={repository.html_url}/>
          })}
      </section>
      <section>
        {currentUser && repositories.length && (repositories.length !== repositoryMax) > 0 &&<ShowMore 
        onClick={() => setRepositoryMax(repositories.length)}
        ></ShowMore>}
      </section>
      </main>
      </>)
}
export {AppUI};
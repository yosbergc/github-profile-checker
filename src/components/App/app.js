import './App.css';
import { SearchComponent } from '../SearchComponent/SearchComponent';
import { useMakeRequest } from '../GetUserInfo';
function App() {
  let [currentSearch, setCurrentSearch] = useMakeRequest();
  return (
    <>
    <header>
      <SearchComponent currentSearch={currentSearch} setCurrentSearch={setCurrentSearch}/>
    </header>
    <section className='UpperBody'>
      <section className='userProfilePhoto'>
        
      </section>
      <section className='userSummary'>

      </section>
    </section>
    </>
  );
}

export default App;

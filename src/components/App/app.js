import './App.css';
import { AppUI } from './AppUI';
import { GiveContext } from '../Context/context';

function App() {
  return (
    <GiveContext>
      <AppUI/>
    </GiveContext>
  );
}

export default App;

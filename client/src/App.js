import { StoreProvider } from './context/Store';
import { Results } from './components/Results';
import { Title } from './components/Title';

import './App.css';
import { AddHiker } from './components/AddHiker';
import { AddBridge } from './components/AddBridge';

function App() {
  
  return (
    <StoreProvider>
      <div className='container'>
        <Title />
        <Results />
        <div className='row'>
          <AddHiker />
          <AddBridge />
        </div>
      </div>
    </StoreProvider>
  );
}

export default App;

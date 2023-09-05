import './App.css';
import Reducer from './components/reducer';
import ContextProvider  from './reducer/context';
import ContextAPI from './components/contextApi';

function App() {
  return (
    <>
      <ContextProvider>
          <ContextAPI/>
      </ContextProvider>
      <Reducer/>
    </>
  );
}

export default App;

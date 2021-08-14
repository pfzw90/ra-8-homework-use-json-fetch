import logo from './logo.svg';
import './App.css';
import {JsonFetchTesterWithData, JsonFetchTesterWithError, JsonFetchTesterWithLoading} from './components/JsonFetchTesters';

function App() {
  return (
    <div className="App">
      <JsonFetchTesterWithData />
      <JsonFetchTesterWithError />
      <JsonFetchTesterWithLoading />
    </div>
  );
}

export default App;

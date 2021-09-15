import logo from './logo.svg';
import './App.css';
import {searchGif} from './modules/giphy_api.js';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Search GIPHY</h1>
      </header>
        <div className="searchbar">
            <input type="search"/>
            <button>Search</button>
        </div>

        <div className="results">
            {Array(20).fill(<img src="https://via.placeholder.com/350x350"/>)}
        </div>
    </div>
  );
}

export default App;

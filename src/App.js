import './App.css';
import {searchGif} from './modules/giphy_api.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchText: ''};
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Search GIPHY</h1>
      </header>
        <div className="searchbar">
            <input type="search" onChange={e => this.setState({searchText: e.target.value})/>
            <button onClick={searchGiphy}>Search</button>
        </div>

        <div className="results">
            {startSearch()}
        </div>
    </div>
  );
}

async function startSearch() {
    return await searchGif(this.state.searchText).map(gif => <img src={gif.url} />)
}

export default App;

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
            <input type="search" onChange={this.}/>
            <button onClick={searchGiphy}>Search</button>
        </div>

        <div className="results">
            {Array(20).fill(<img src="https://via.placeholder.com/350x350"/>)}
        </div>
    </div>
  );
}
let list = [];
function searchGiphy() {
    return await searchGif().map(gif => <img src={gif.url} />)
}

export default App;

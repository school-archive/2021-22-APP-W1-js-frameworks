import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Search GIPHY</h1>
      </header>
        <div className="searchbar">
            <input type="search"/>
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
    return list.map(gif => <img src={gif.url} />)
}

export default App;

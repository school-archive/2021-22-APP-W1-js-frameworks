import './App.css';
import {searchGif} from './modules/giphy_api.js';
import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            searchResults: [],
        };
    }

    render() {
        return (
            <div className="app">
                <header className="app-header">
                    <h1>Search GIPHY</h1>
                </header>
                <div className="searchbar">
                    <input type="search" onChange={e => this.setState({searchText: e.target.value})}/>
                    <button onClick={() => this.startSearch()}>Search</button>
                </div>

                <div className="results">
                    {this.state.searchResults}
                </div>
            </div>
        );
    }

    async startSearch() {
        console.log(this)
        let searchResults = (await searchGif(this.state.searchText)).map(gif => <img src={gif.url}/>);
        console.log(searchResults)
        this.setState({searchResults})
    }

}

export default App;

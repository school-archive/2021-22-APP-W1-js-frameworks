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
        this.handleKey = this.handleKey.bind(this);
    }

    render() {
        return (
            <div className="app">
                <header className="app-header">
                    <h1>Search GIPHY</h1>
                </header>
                <div className="searchbar">
                    <input type="search" onKeyDown={this.handleKey} onChange={e => this.setState({searchText: e.target.value})}/>
                    <button onClick={() => this.startSearch()}>Search</button>
                </div>

                {
                    this.state.searchResults.length
                    ? <div className="results">{this.state.searchResults}</div>
                    : <div>Nothing to show</div>
                }
            </div>
        );
    }

    async startSearch() {
        console.log(this)
        let searchResults = (await searchGif(this.state.searchText)).map(gif => <img src={gif.url}/>);
        console.log(searchResults)
        this.setState({searchResults})
    }

    handleKey(event) {
        if (event.key === "Enter") {
            this.startSearch();
        }
    }

}

export default App;

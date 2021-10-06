import React from "react";
import './giphy-result.css'

class GiphyResult extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <img src={this.props.url}/>
        );
    }
}

export default GiphyResult;

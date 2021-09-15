import React from "react";
import './giphy-result.css'

class GiphyResult extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="giphy-result">
                <img src={this.props.url}/>
            </div>
        );
    }
}

export default GiphyResult;

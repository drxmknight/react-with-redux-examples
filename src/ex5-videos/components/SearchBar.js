import React from 'react';

class SearchBar extends React.Component {
    state = {text: ''};

    // Change the state of the component on text change.
    onTextChange = (event) => {
        this.setState({text: event.target.value})
    };
    
    // Set the component state on form submit calling the parten's callback.
    onFormSubmit = (event) => {
        // Prevent the page to refresh on for submit.
        event.preventDefault();
        // Call the parents callback.
        this.props.onTextSubmit(this.state.text);
    };

    // Render the component.
    render() {
        return (
            <div className="ui segment search-bar">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value={this.state.text} onChange={this.onTextChange}></input>
                    </div>
                </form>
            </div>
        );
    };
}

export default SearchBar;
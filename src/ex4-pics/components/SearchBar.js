import React from 'react';

class SearchBar extends React.Component {
    // Initialize state of the component.
    state = { text: '' };

    // Method called on form submit.
    onFormSubmit = (event) => {
        // Prevent the page to reload on submit.
        event.preventDefault();
        // Call parent function.
        this.props.onSearchSubmit(this.state.text);
    };

    // Arrow function to not bind 'this' to the function, and use the 'this' referenced to the object.
    onTextChange = (event) => {
        this.setState({text: event.target.value});
    }
    // Render the component with JSX.
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={this.state.text} onChange={this.onTextChange}></input>
                    </div>
                </form>
            </div>
        );
    }
};

// Export the SearchBar component.
export default SearchBar;
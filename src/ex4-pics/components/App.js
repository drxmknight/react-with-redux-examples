import React from 'react';
//import Unsplash from '../api/Unsplash';
import Mocky from '../api/Mocky';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    // Initialize component state.
    state = { images: [] };

    // Callback function to pass values from child to parent component with props.
    onSearchSubmit = async (term) => {
        // Fetch data from the API.
        // Uncomment unsplash API to use the search bar. Must have a API-KEY.
        //const response = await Unsplash.get('/search/photos', { params: { query: term } });
        const response = await Mocky.get('/5c4737c53100002d008a1d22');
        console.log(response);
        // Set the state of the component with the fetched data.
        this.setState({ images: response.data.results });
    }

    /* render method of a class component.
     * onSearchSubmit passed as callback with 'props' to call it from the child component.
     * pass the image list with props to the ImageList component.
     */
    render() {
        return (
            <div className="ui container">
                <SearchBar onSearchSubmit={this.onSearchSubmit}></SearchBar>
                <ImageList images={this.state.images}></ImageList>
            </div>
        );
    }
}

// Export App component.
export default App;
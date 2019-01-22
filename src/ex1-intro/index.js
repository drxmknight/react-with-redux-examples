// Import the react and reactDOM libraries.
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
    return <div>Hello World!</div>
}

// Take react component and show it on the screen
ReactDOM.render(
    <App></App>,
    document.querySelector('#ex1')
);

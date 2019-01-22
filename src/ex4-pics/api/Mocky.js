import Axios from 'axios';

// Axios http request configuration.
export default Axios.create({
    // API to get HTTP responses to test apps.
    baseURL: 'http://www.mocky.io/v2',
});

import Axios from 'axios';

// For testing the response without spending queries.
export default Axios.create({
    baseURL: 'http://www.mocky.io/v2',
});

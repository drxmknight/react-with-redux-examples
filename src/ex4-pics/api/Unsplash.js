import Axios from 'axios';

export default Axios.create({
    // unsplash API to get free images.
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID YOUR-API-KEY-HERE'
    }
});

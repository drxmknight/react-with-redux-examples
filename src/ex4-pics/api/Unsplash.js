import Axios from 'axios';
import * as keys from '../../config/keys';

export default Axios.create({
    // unsplash API to get free images.
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: `Client-ID ${keys.UNSPLASH_KEY}`
    }
});

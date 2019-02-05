import Axios from 'axios';
import * as keys from '../../config/keys';

export default Axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: keys.YOUTUBE_KEY
    }
});


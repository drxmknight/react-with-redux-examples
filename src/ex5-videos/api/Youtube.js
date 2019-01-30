import Axios from 'axios';

const KEY = 'AIzaSyDE0WcLYf9AK14NqVvBmstIM4IXF5HHq7U';

export default Axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});


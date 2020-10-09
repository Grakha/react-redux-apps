import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID s-_ciVlZ42Og_iWcBNJ8WN2WXY-BUdvg1JMBGeBHMtw'
    }
});
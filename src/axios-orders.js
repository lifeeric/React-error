import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://learn-743e9.firebaseio.com'
});

export default instance;
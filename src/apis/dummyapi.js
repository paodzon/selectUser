import axios from 'axios';

export default axios.create({
    baseURL:'https://dummyapi.io/data/api',
    headers:{
        'app-id':'60056c71b28bf4b3ca690d07'
    }
})
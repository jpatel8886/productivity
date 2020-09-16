import axios from 'axios';

const instance = axios.create({
    baseURL: "https://productivity-e26b5.firebaseio.com/"
}); 

export default instance;
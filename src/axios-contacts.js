import axios from 'axios';

const contactsAxios = axios.create({
    baseURL: "http://demo.sibers.com"
});

export default contactsAxios;
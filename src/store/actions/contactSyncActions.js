import axios from '../../axios-contacts';
import {FETCH_CONTACT_SUCCESS, SAVE_CONTACT_SUCCESS} from "./contactTypeActions";

export const fetchContactSuccess = contacts => ({type: FETCH_CONTACT_SUCCESS, contacts});
export const setSaveContact = contacts => ({type: SAVE_CONTACT_SUCCESS, contacts});

export const fetchContact = () => {
    return dispatch => {
        return axios.get('/users').then(response => {
            localStorage.setItem('contacts', JSON.stringify(response.data));
            dispatch(fetchContactSuccess(response.data));
        })
    }
};

export const saveContact = contacts => {
    return dispatch => {
        dispatch(setSaveContact(contacts));
    }
};
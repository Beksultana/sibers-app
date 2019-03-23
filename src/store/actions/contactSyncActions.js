import axios from '../../axios-contacts';
import {FETCH_CONTACT_SUCCESS} from "./contactTypeActions";

export const fetchContactSuccess = contacts => ({type: FETCH_CONTACT_SUCCESS, contacts});

export const fetchContact = () => {
    return dispatch => {
        return axios.get('/users').then(response => {
            dispatch(fetchContactSuccess(response.data));
        })
    }
};
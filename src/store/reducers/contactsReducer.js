import {FETCH_CONTACT_SUCCESS, SAVE_CONTACT_SUCCESS} from "../actions/contactTypeActions";

const initialState = {
    contacts: []
};

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CONTACT_SUCCESS:
            return {
                ...state,
                contacts: action.contacts
            };
        case SAVE_CONTACT_SUCCESS:
            return {
                ...state,
                contacts: action.contacts
            };
        default:
            return state;
    }
};

export default contactReducer;
import { createStore } from "redux";

const initialState = {
    token: null,
    firstName: null,
    lastName: null,
};

const reducer = (state = initialState, action) => {
    if(action.type === 'LOGIN') {
        return {
            ...state,
            token: action.payload,
        };
    }

    if(action.type === 'GET_PROFILE') {
        return {
            ...state,
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
        }
    }
    return state;
};

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
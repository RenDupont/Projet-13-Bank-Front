import { createStore } from "redux";

const initialState = {
    token: null,
};

const reducer = (state = initialState, action) => {
    if(action.type === 'LOGIN') {
        return {
            ...state,
            token: action.payload,
        };
    }
    return state;
};

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
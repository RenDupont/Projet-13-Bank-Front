

export const login = (token) => ({
    type: 'LOGIN',
    payload: token,
});

export const getProfile = (firstName, lastName) => ({
    type: 'GET_PROFILE',
    payload: {firstName, lastName},
});
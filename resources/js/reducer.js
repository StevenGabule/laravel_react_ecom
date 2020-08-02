
const initialState = {
    loading: false,
    user: null,
    error: false
};

function authReducer(state = initialState, action) {
    switch(action.type) {
        case types.AUTH_LOGIN:
            return {
                ...state,
                loading: false,
                user: action.payload
            }

        default:
            return state;
    }
}

export default authReducer;

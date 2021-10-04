import UserActionTypes from "./user.type";

const initialState = {
    currentuser : null,
    errorMsg : null
}


const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
        return { ...state,
            currentuser:payload,
            errorMsg : null }
    case UserActionTypes.SIGN_OUT_SUCCESS:
    return { ...state,
            currentuser:null,
            errorMsg : null }
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
        return { ...state,
            errorMsg:payload }
            
    default:
        return state
    }
}

export default userReducer;
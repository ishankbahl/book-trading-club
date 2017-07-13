import { LOG_IN , LOG_OUT } from "./../constants";

function reducer ( state = {} , action )  {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                logged : true,
                email  : action.email
            }
        case LOG_OUT:
            return {
                ...state,
                logged : false
            }
        default:
            return state;
    }
}

export default reducer;
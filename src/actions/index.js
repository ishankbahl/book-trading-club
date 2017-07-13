import { LOG_IN , LOG_OUT } from "./../constants";

export function log_in (email) {
    const action = {
        type:LOG_IN,
        email
    }

    return action;
};

export function log_out (email) {
    const action = {
        type:LOG_OUT,
    }

    return action;
};
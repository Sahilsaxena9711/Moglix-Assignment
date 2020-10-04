import { POST_ACTIONS, STATE_STATUS } from "../../constants";

// initial state of the reducer
const INITIAL_STATE = {
    status: STATE_STATUS.UNFETCHED,
    data: [],
    error: null
}

export default (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case POST_ACTIONS.FETCH_POSTS:
            return {
                ...state,
                status: STATE_STATUS.FETCHING
            };
        case POST_ACTIONS.FETCHED_POSTS:
            return {
                ...state,
                status: STATE_STATUS.FETCHED,
                data: payload.data,
            };
        case POST_ACTIONS.FAILED_FETCH_POSTS:
            return {
                ...state,
                status: STATE_STATUS.FAILED_FETCH,
                error: true,
            };
        default:
            return state;
    }
}
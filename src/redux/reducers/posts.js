import { POST_ACTIONS, STATE_STATUS } from "../../constants";

// initial state of the reducer
const INITIAL_STATE = {
    posts: {
        status: STATE_STATUS.UNFETCHED,
        data: [],
        error: null
    },
    createPost: {
        status: STATE_STATUS.UNFETCHED,
    }
}

export default (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case POST_ACTIONS.FETCH_POSTS:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    status: STATE_STATUS.FETCHING
                }
            };
        case POST_ACTIONS.FETCHED_POSTS:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    status: STATE_STATUS.FETCHED,
                    data: payload.data,
                }
            };
        case POST_ACTIONS.FAILED_FETCH_POSTS:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    status: STATE_STATUS.FAILED_FETCH,
                    error: true,
                }
            };

        case POST_ACTIONS.FETCH_CREATE_POSTS:
            return {
                ...state,
                createPost: {
                    status: STATE_STATUS.FETCHING
                }
            };
        case POST_ACTIONS.FETCHED_CREATE_POSTS:
            return {
                ...state,
                createPost: {
                    status: STATE_STATUS.FETCHED
                },
                posts: {
                    ...state.posts,
                    data: [
                        payload.post,
                        ...state.posts.data
                    ]
                }
            };
        case POST_ACTIONS.FAILED_FETCH_CREATE_POSTS:
            return {
                ...state,
                createPost: {
                    status: STATE_STATUS.FAILED_FETCH
                }
            };

        default:
            return state;
    }
}
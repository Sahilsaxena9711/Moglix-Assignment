//constants
import { POST_ACTIONS } from "../../constants";

// action to fetch post
export const fetchPosts = () => {
    return {
        type: POST_ACTIONS.FETCH_POSTS
    }
}

// action when posts are fetched
export const fetchedPosts = (data) => {
    return {
        type: POST_ACTIONS.FETCHED_POSTS,
        payload: {
            data
        }
    }
}

// action when posts fetching failed
export const failedFetchPosts = (error) => {
    return {
        type: POST_ACTIONS.FAILED_FETCH_POSTS,
        payload: {
            error
        }
    }
}


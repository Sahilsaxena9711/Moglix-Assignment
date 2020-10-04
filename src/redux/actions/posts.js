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


// action to create post
export const fetchCreatePosts = (post) => {
    return {
        type: POST_ACTIONS.FETCH_CREATE_POSTS,
        payload: {
            post
        }
    }
}

// action when posts is create
export const fetchedCreatePosts = (post, data) => {
    return {
        type: POST_ACTIONS.FETCHED_CREATE_POSTS,
        payload: {
            data,
            post
        }
    }
}

// action when posts creation failed
export const failedFetchCreatePosts = (error) => {
    return {
        type: POST_ACTIONS.FAILED_FETCH_CREATE_POSTS,
        payload: {
            error
        }
    }
}


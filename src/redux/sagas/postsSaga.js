// dependencies
import { put, call, fork, takeLatest } from "redux-saga/effects";
// constants
import { POST_ACTIONS, STATE_STATUS } from "../../constants";
// api call
import { getPosts } from "../../services";
// actions
import {
    fetchedPosts,
    failedFetchPosts,
} from "../actions";

function* fetchPosts() {
    try {
        const { data } = yield call(getPosts);
        if (data === STATE_STATUS.SERVER_ERROR) {
            yield put(failedFetchPosts(error));
        } else {
            yield put(fetchedPosts(data))
        }
    } catch (error) {
        yield put(failedFetchPosts(error));
    }
}

export default fork(function* () {
    yield takeLatest(POST_ACTIONS.FETCH_POSTS, fetchPosts)
})

// sagas are exported from this file
import { all } from "redux-saga/effects";
import postsSaga from "./postsSaga";

export default function* () {
    yield all([postsSaga]);
}
import { fork, all } from "redux-saga/effects";
import map from "lodash/map";
import login from './Login';

const combinedSagas = [
  login.saga
];

export default function* root() {
    yield all(map(combinedSagas, fork));
}
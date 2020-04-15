import axios from "axios";
import { all, takeEvery, put, call } from "redux-saga/effects";
import * as actions from "../actions";
import history from "../history";

const API_URL = "http://localhost:3000/";
const request = axios.create({
  baseURL: API_URL,
  timeout: 1000,
});

const read = async (path) =>
  await request
    .get(path)
    .then((response) => response.data)
    .catch((err) => err);

const PATH = "products";

function* loadProduct() {
  try {
    const data = yield call(read, PATH);
    yield put(actions.loadProductSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(actions.loadProductFailure());
  }
}

export default function* rootSaga() {
  yield all([takeEvery("LOAD_PRODUCTS", loadProduct)]);
}

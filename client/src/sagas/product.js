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

const add = async (path, params) => {
  return await request
    .post(path, params)
    .then((response) => response.data)
    .catch((err) => err);
  }

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

function* postProduct(payload) {
  const { id, title, rate, description, price, detailproduct } = payload;
  console.log(payload, 'data')
  yield put(
    actions.postProductRedux(title, parseInt(rate), description, parseInt(price), detailproduct)
  );
  try {
    const data = yield call(add, PATH, {
      title,
      rate,
      description,
      price,
      detailproduct,
    });
    yield put(actions.postProductSuccess(data));
    history.push("/product");
  } catch (error) {
    console.log(error);
    yield put(actions.postProductFailure(id));
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery("LOAD_PRODUCTS", loadProduct),
    takeEvery("ADD_TODO", postProduct),
  ]);
}

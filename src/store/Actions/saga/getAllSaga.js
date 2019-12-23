import { call, put, takeEvery } from "redux-saga/effects";
import Api from "../../../lib/api";
import { FETCH_ALL_ITEMS } from "../../constants";
import { updateAllItems } from "../itemsActions";

function* makeApiRequest() {
  const items = yield call(Api.getAll);
  yield put(updateAllItems(items));
}

export default function* fetchItemsFromApi() {
  yield takeEvery(FETCH_ALL_ITEMS, makeApiRequest);
}

import { call, put, takeLatest } from "redux-saga/effects";
import TriviaService from "../../service/TriviaService";
import { getClues, setClues } from "./slice";

function* getCluesHandler() {
  const data = yield call(TriviaService.getClues);

  yield put(setClues(data));
}

export function* watchForSagas() {
  yield takeLatest(getClues.type, getCluesHandler);
}

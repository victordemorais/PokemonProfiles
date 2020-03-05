import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actionsPoke from 'actions/poke';
// import configuration api
function* updatePokes() {
  const response = yield call(url, params);

  yield put(actionsPoke.updatePokesUpdateList(response.data));
}

export default all([takeLatest('POKE/UPDATE_LIST_POKES', updatePokes)]);

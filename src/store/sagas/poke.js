import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actionsPoke from '../actions/poke';
import api from '../../services';
// import configuration api
function* setPokesList() {
  const response = yield call(api.get, '/1');
  yield put(actionsPoke.setPokeList(response.data));
}

export default all([takeLatest(actionsPoke.REQUEST_LIST_POKES, setPokesList)]);

import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actionsPoke from '../actions/poke';
import api, { urlApi } from '../../services';
import history from '../../services/history';

function* loadEachPokes(pokes) {
  const allPokes = yield all(
    pokes.map(function* poke(val) {
      const response = yield call(api.get, val.url);
      return response.data;
    })
  );
  return allPokes;
}

function* setPokesList() {
  const response = yield call(api.get, urlApi);
  const allPokes = yield loadEachPokes(response.data.results);

  yield put(actionsPoke.setPokeList(allPokes));
}

function* selectPoke() {
  yield put(actionsPoke.selectPokeSuccess());
  history.push('/poke');
}

export default all([
  takeLatest(actionsPoke.REQUEST_LIST_POKES, setPokesList),
  takeLatest(actionsPoke.SELECT_POKE, selectPoke),
]);

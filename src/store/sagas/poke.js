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

function* setPokesList({ url = urlApi }) {
  const response = yield call(api.get, url);
  const allPokes = yield loadEachPokes(response.data.results);
  const mountData = {
    allPokes,
    next: response.data.next,
    previous: response.data.previous,
  };

  yield put(actionsPoke.setPokeList(mountData));
}

function* selectPoke() {
  yield put(actionsPoke.selectPokeSuccess());
  history.push('/poke');
}

export default all([
  takeLatest(actionsPoke.REQUEST_LIST_POKES, setPokesList),
  takeLatest(actionsPoke.SELECT_POKE, selectPoke),
]);

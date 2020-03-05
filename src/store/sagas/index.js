import { all } from 'redux-saga/effects';
import poke from './poke';

export default function* rootSaga() {
  return yield all([poke]);
}

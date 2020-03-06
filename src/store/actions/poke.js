export const REQUEST_LIST_POKES = 'REQUEST_LIST_POKES';
export const SET_LIST_POKES = 'UPDATE_LIST_POKES';
export const SELECT_POKE = 'SELECT_POKE';
export const SELECT_POKE_SUCCESS = 'SELECT_POKE_SUCCESS';

export function pokeRequestList(url) {
  return {
    type: REQUEST_LIST_POKES,
    url,
  };
}

export function setPokeList(payload) {
  return {
    type: SET_LIST_POKES,
    payload,
  };
}

export function selectPoke(payload) {
  return {
    type: SELECT_POKE,
    payload,
  };
}

export function selectPokeSuccess() {
  return {
    type: SELECT_POKE_SUCCESS,
  };
}

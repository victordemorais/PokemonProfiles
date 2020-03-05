export const REQUEST_LIST_POKES = 'REQUEST_LIST_POKES';
export const SET_LIST_POKES = 'UPDATE_LIST_POKES';

export function pokeRequestList() {
  return {
    type: REQUEST_LIST_POKES,
  };
}

export function setPokeList(payload) {
  return {
    type: SET_LIST_POKES,
    payload,
  };
}

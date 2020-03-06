import * as actionsPoke from '../actions/poke';

const initialState = {};

const pokeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsPoke.REQUEST_LIST_POKES:
      return {
        ...state,
        loading: true,
      };
    case actionsPoke.SET_LIST_POKES:
      return {
        ...state,
        loading: false,
        pokeList: action.payload,
      };
    default:
      return state;
  }
};

export default pokeReducer;

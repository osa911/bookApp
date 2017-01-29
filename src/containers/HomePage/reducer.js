import { combineReducers } from 'redux';
import * as types from './constants';

const initialState = {
  entity: {
    bookList: [],
    autorList: [],
    autors: {},
    books: {},
    genre: [],
  },
};

const entity = (state = initialState.entity, action) => {
  switch (action.type) {
    case types.LOAD_SUCCESS:
      return action.data;
    default:
      return state;
  }
};

export default combineReducers({
  entity,
});

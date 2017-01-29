import { createSelector, createStructuredSelector } from 'reselect';

const REDUCER = 'Home';

const bookList = state => state[REDUCER].entity.bookList;
const autors = state => state[REDUCER].entity.autors;
const entity = state => state[REDUCER].entity;

export default createStructuredSelector({
  bookList,
  autors,
  entity,
});

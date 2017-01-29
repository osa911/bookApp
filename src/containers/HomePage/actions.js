import * as types from './constants';

export const load = () => ({
  types:   [
    types.LOAD_REQUEST,
    types.LOAD_SUCCESS,
    types.LOAD_FAILURE,
  ],
  promise: api => api.get('/getData'),
});

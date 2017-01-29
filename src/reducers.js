import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import Home from './containers/HomePage/reducer';

const rootReducer = combineReducers({
  form: formReducer,
  Home
});

export default rootReducer;

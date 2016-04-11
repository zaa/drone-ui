import { combineReducers } from 'redux';

import user from './user/reducer';
import repositories from './repositories/reducer';
import builds from './builds/reducer';

export const drone = combineReducers({
  builds,
  repositories,
  user
});

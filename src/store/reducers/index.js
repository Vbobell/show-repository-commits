import { combineReducers } from 'redux';
import repositoriesReducers from './repositories-reducer';
import commitsReducers from './commits-reducer';

const rootReducer = combineReducers({
    repositories: repositoriesReducers,
    commits: commitsReducers
});
  
export default rootReducer;
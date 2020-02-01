import {combineReducers} from 'redux';
import errorReducer from './errorsReducer';
import projectTaskReducer from './projectTaskReducer';

export default combineReducers({
    
    errors: errorReducer,
    project_tasks: projectTaskReducer,
});
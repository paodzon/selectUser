import {combineReducers} from 'redux';
import dataReducer from './dataReducer';
import selectUserReducer from './selectUserReducer';

export default combineReducers({
    data:dataReducer,
    selectedUser: selectUserReducer
});
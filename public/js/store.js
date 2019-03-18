import {createStore} from 'redux';
import allReducers from './reducers/index';
import state from './state'


const store = createStore(
    allReducers, state
);

export default store;

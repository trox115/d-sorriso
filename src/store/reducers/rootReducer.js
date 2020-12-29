import authReducer from './authReducer';
import clientReducer from './clientReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    clientes: clientReducer
})

export default rootReducer;
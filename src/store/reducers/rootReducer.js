import authReducer from './authReducer';
import clientReducer from './clientReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  auth: authReducer,
  clientes: clientReducer,
  firestore: firestoreReducer
});

export default rootReducer;

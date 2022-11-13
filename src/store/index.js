import { configureStore } from '@reduxjs/toolkit';
import thunk from "redux-thunk";
import { combineReducers, } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducerServices from '../reducers/reducerServices';
import reducerServicesId from '../reducers/reducerServicesId';
import saga from '../sagas/sagas';

const reducer = combineReducers({
  reducerServices: reducerServices,
  reducerServicesId: reducerServicesId
});

const sagaMiddleware = createSagaMiddleware();

const store =  configureStore({
  reducer: reducer,
  middleware: [sagaMiddleware, thunk]
});


sagaMiddleware.run(saga);

export default store;
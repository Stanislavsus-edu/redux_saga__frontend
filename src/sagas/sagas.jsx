import { take, put, spawn, fork, call } from "redux-saga/effects";
import { servicesRequest, servicesSusccess, servicesFailure } from '../reducers/reducerServices';
import { servicesIdRequest, servicesIdSusccess, servicesIdFailure } from '../reducers/reducerServicesId';
import { fetchRequest } from "../api/fetchRequest";


function* watchServicesRequestSaga() {
  while (true) {
    const action = yield take(servicesRequest.type);
    yield fork(handleServicesRequest, action);
  }
}

function* handleServicesRequest() {
  try {
    const data = yield call(fetchRequest);
    yield put(servicesSusccess(data));
  } catch (error) {
    yield put(servicesFailure(error.message));
  }
}

function* watchServicesIdRequestSaga() {
  while (true) {
    const action = yield take(servicesIdRequest.type);
    yield fork(handleServiceIdRequest, action);
  }
}

function* handleServiceIdRequest(action) {
  try {
    const data = yield call(fetchRequest, action.payload);
    yield put(servicesIdSusccess(data));
  } catch (error) {
    yield put(servicesIdFailure(error.message));
  }
}

export default function* saga() {
  yield spawn(watchServicesRequestSaga);
  yield spawn(watchServicesIdRequestSaga);
}
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  signupUserSuccess,
  signupUserFailed,
  loginUserSuccess,
  loginUserFailed,
} from './Slice'; 


const API_URL = process.env.API_URL_Backend
// Worker Saga for Signup
function* signupUserSaga(action) {
  try {
    const response = yield call(axios.post, `${API_URL}/user/signup`, action.payload);
    yield put(signupUserSuccess(response.data));
  } catch (error) {
    yield put(signupUserFailed(error.message));
  }
}

// Worker Saga for Login
function* loginUserSaga(action) {
  try {
    const response = yield call(axios.post, `${API_URL}/user/login`, action.payload);
    yield put(loginUserSuccess(response.data));
  } catch (error) {
    yield put(loginUserFailed(error.message));
  }
}

// Watcher Saga
function* Saga() {
  yield takeLatest('user/signupUser', signupUserSaga);
  yield takeLatest('user/loginUser', loginUserSaga);
}

export default Saga;

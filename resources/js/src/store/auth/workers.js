import { put, select, call } from "redux-saga/effects";

import { User } from "../../models/User";

import makeRequest, { HTTP } from "../../api/makeRequest";
import { login, signup, logout } from "../../api/endpoints/auth";
import { get as getUser } from "../../api/endpoints/user";
import { objectTransformKeys, snakeCaseToLowerCamelCase } from "../../common/helpers";

import { getModel } from "../user/selectors";
import { getToken } from "./selectors";
import { setUserData, updateRef as updateUserRef } from "../user/actions";
import { responseError, loginError, loginSuccess, signupError, signupSuccess } from "./actions";

/**
 * Получение токена, и вызов цепочки действия при успешном логине ( костыльно, возможно потом переработаем )
 * @yield
 **/
export function* getTokenFromStorage() {
  /** @todo плохо завязыватся на конкретную реализацию, подумать как отвязатся от такого вызова */
  const token = localStorage.getItem( process.env.MIX_APP_TOKEN_KEY );

  if ( token ) {
    yield put( loginSuccess( token ) );
  } else {
    yield put( loginError() );
  }
}

/**
 * Обработчик потока сохранения пользователя, в случае успеха - инициирует действие успешной регистрации
 * в противном случае - инициирует действие ошибки
 * В обоих случаях, ссылка на обьект DTO обновляется, чтоб обновилась форма
 *
 * @yield
 **/
export function* submit() {
  const user = yield select( getModel );

  try {
    if ( !user || !user.validate( User.SIGNUP_SCENARIO ) ) {
      throw new Error("Validation error");
    }
    const { status, data } = yield call( makeRequest, signup( user ) );

    if ( status !== HTTP.OK ) {
      user.setErrors( data.errors );
      throw new Error("Validation error");
    }
    localStorage.setItem( process.env.MIX_APP_TOKEN_KEY, data.token );
    yield put( signupSuccess( data.token ) );
  } catch ( ex ) {
    yield put( signupError() );
  }

  yield put( updateUserRef() );
}

/**
 * Обработчик потока авторизации
 * @yield
 **/
export function* userLogin( action ) {
  const { email, password } = action.payload;
  const user = new User();
  user.email = email;
  user.password = password;

  if ( user.validate( User.LOGIN_SCENARIO ) ) {
    const { status, data } = yield call( makeRequest, login( user.email, user.password ) );

    if ( status === HTTP.OK ) {
      localStorage.setItem( process.env.MIX_APP_TOKEN_KEY, data.token );
      yield put( loginSuccess( data.token ) );
      return;
    }
  }
  yield put( responseError([ "Wrong username or password" ]) );
}

/**
 * Обработчик успешной авторизации и регистрации, сохраняем токен и выполняем авторизацию по нему на бекенде
 * @yield
 **/
export function* tokenAuth() {
  const token = yield select( getToken );

  const { status, data: { data } } = yield call( makeRequest, getUser );

  if ( status === HTTP.OK && data instanceof Object ) {
    const preparedUserData = {
      ...objectTransformKeys( data, snakeCaseToLowerCamelCase ),
      photo: data.avatar?.photo,
      _id: data.id
    };
    yield put( setUserData( preparedUserData ));

    localStorage.setItem( process.env.MIX_APP_TOKEN_KEY, token );
  } else {
    yield put( loginError() );
  }
}

/**
 * Разлогинить пользователя
 * @yield
 **/
export function* userLogout() {
  yield call( makeRequest, logout );
  yield localStorage.removeItem( process.env.MIX_APP_TOKEN_KEY );
}


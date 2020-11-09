import * as ACTION from "./types";

/**
 * Действие изменения данных на форме регистрации
 * @return { Object } }
 **/
export function changeSignupData( key, value ) {
    return { type: ACTION.CHANGE_SIGNUP_DATA, payload: { key, value } };
}

/**
 * Действие отправки формы на регистрацию
 * @return { Object }
 **/
export function submit() {
    return { type: ACTION.SUBMIT };
}

/**
 * Действие успешной регистрации
 * @return { Object } }
 **/
export function signupSuccess() {
    return { type: ACTION.SIGNUP_SUCCESS };
}

/**
 * Действие ошибки пре регистрации
 * @return { Object }
 **/
export function signupError() {
    return { type: ACTION.SIGNUP_ERROR };
}

/**
 * Действие отправки данных на авторизацию
 * @return { Object }
 **/
export function login() {
    return { type: ACTION.LOGIN };
}
/**
 * Действие успешной авторизации
 * @param { String } token
 * @return { Object }
 **/
export function loginSuccess( token ) {
    return { type: ACTION.LOGIN_SUCCESS, payload: token };
}
/**
 * Действие ошибки при авторизации
 * @return { Object }
 **/
export function loginError() {
    return { type: ACTION.LOGIN_ERROR };
}

/**
 * Действие ошибки валидации на бекенде
 * @param { Array } errors
 * @return { Object }
 **/
export function backendValidationError( errors ) {
    return { type: ACTION.BACKEND_VALIDATION_ERROR, payload: errors };
}

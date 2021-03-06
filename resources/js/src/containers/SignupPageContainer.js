import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import SignupPage from "../pages/SignupPage";
import { submit } from "../store/auth/actions";
import { changeModelAttribute } from "../store/user/actions";

/**
 * Обертка над компонентом страници, в случае если пользоавтель авторизован, перенаправляем на главную
 * @param { Object } props
 * @return { JSX.Element }
 **/
function PageWrapper( props ) {
  const { isAuthorized, ...rest } = props;
  if ( isAuthorized ) {
    return <Redirect to="/"/>;
  }
  return <SignupPage { ...rest } />;
}

PageWrapper.propTypes = {
  isAuthorized: PropTypes.bool.isRequired
};

/**
 * Мапим параметры из стора, которые нужны нашей странице
 * @param { Object } state
 * @return { Object }
 **/
function mapStateToProps( state ) {
  const { auth: { isAuthorized, errors }, user: { model } } = state;
  return {
    errors,
    user: model,
    isAuthorized,
  };
}

/**
 * Мапим и оборачиваем функцией dispatch, все actionCreators
 **/
function mapDispatchToProps( dispatch ) {
  return  bindActionCreators({ changeModelAttribute, submit }, dispatch );
}

/** Отдаем на использование подготовленный контейнер */
export default connect( mapStateToProps, mapDispatchToProps )( PageWrapper );

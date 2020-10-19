import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import testReducer from "./domains/__example__/reducer";

const middlewaresList = [];
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

if ( process.env.NODE_ENV === `development` ) {
    const { logger } = require(`redux-logger`);
    middlewaresList.push( logger );
}

const rootReducer = combineReducers({
    test: testReducer
});

export default composeEnhancers( applyMiddleware( ...middlewaresList ) )( createStore )( rootReducer );

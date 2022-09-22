import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { GameXucXac } from './gameXucXac/GameXucXac';

const rootReducer = combineReducers({
    GameXucXac: GameXucXac
});

let middleWare = applyMiddleware(reduxThunk);
let composeCustom = compose(middleWare, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export const store = createStore(rootReducer, composeCustom);
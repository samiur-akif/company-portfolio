import {combineReducers} from 'redux';
import pagesReducer from './Pages/Pages/pages-reducer';
import aboutReducer from './Pages/About/about-reducer';


const rootReducer = combineReducers({
    pages: pagesReducer,
    about: aboutReducer
})

export default rootReducer;
import {combineReducers} from 'redux';
import homeReducer from './Pages/Home/home-reducer';
import aboutReducer from './Pages/About/about-reducer';


const rootReducer = combineReducers({
    home: homeReducer,
    about: aboutReducer
})

export default rootReducer;
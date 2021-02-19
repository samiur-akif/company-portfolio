import {combineReducers} from 'redux';
import pagesReducer from './Pages/pages-reducer';
import domainReducer from './Domain/domain-reducer';
import cartReducer from './Cart/cart-reducer';


const rootReducer = combineReducers({
    pages: pagesReducer,
    domain: domainReducer,
    cart: cartReducer
})

export default rootReducer;
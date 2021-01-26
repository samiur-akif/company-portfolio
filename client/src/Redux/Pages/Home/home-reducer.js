const INITIAL_STATE = {
    homeData : []
}

const homeReducer = (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case 'UPDATE_HOME_DATA':
            return {
                ...state,
                homeData: action.payload
            }
    
        default:
            return state
    }
}

export default homeReducer
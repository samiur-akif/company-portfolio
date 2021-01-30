const INITIAL_STATE = {
    data : []
}

const pagesReducer = (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case 'UPDATE_PAGES_DATA':
            return {
                ...state,
                data : action.payload
            }
    
        default:
            return state
    }
}

export default pagesReducer
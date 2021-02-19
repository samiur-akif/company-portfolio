const INITIAL_STATE = {
    data : [],
    translation: 'English'
}

const pagesReducer = (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case 'UPDATE_PAGES_DATA':
            return {
                ...state,
                data : action.payload
            }
        case 'CHANGE_TRANSLATION':
            return {
                ...state,
                translation : action.payload
            }
    
        default:
            return state
    }
}

export default pagesReducer
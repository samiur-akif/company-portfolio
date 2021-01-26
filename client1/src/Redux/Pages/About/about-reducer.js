const INITIAL_STATE = {
    aboutData : []
}

const aboutReducer = (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case 'UPDATE_ABOUT_DATA':
            return {
                ...state,
                aboutData: action.payload
            }
    
        default:
            return state
    }
}

export default aboutReducer;
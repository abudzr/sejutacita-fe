const initialState = {
    bookmark: []
}

const bookmark = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_LIST_BOOKMARK':
            return {
                ...state,
                bookmark: action.payload
            }
        default:
            return state
    }
}

export default bookmark
const initialState = {
    category: []
}

const category = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_LIST_CATEGORY_ACTIVE':
            return {
                ...state,
                category: action.payload
            }
        default:
            return state
    }
}

export default category
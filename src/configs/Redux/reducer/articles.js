const initialState = {
    articles: [],
    listCategory: []
}

const articles = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_LIST_ARTICLES':
            return {
                ...state,
                articles: action.payload
            }
        case 'GET_LIST_CATEGORY':
            return {
                ...state,
                listCategory: action.payload
            }
        default:
            return state
    }
}

export default articles
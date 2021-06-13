import { combineReducers } from 'redux'
import articles from './articles'
import bookmark from './bookmark'
import category from './categoryActive'

const rootReducer = combineReducers({
    articles: articles,
    bookmark: bookmark,
    category: category
})

export default rootReducer
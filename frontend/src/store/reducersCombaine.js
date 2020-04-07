import { combineReducers } from 'redux'
import {tokenReducer} from "./token/reducer"
import {listReducer} from "./list/reducer"
import {completedListReducer} from "./completedList/reducer"
import {newCardReducer} from "./openNewCard/reducer"

export const rootReducer = combineReducers({
    tokenReducer: tokenReducer,
    listReducer: listReducer,
    completedListReducer: completedListReducer,
    newCardReducer: newCardReducer,
})
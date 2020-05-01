import { combineReducers } from 'redux'
import {tokenReducer} from "./token/reducer"
import {listReducer} from "./list/reducer"
import {completedListReducer} from "./completedList/reducer"
import {newCardReducer} from "./openNewCard/reducer"
import {changeEntranceReduser} from "./entrance/reducer"
import {changesCardReducer} from "./ChangesCard/reducer"
import {registrationReducer} from "./registration/reducer"

export const rootReducer = combineReducers({
    tokenReducer: tokenReducer,
    listReducer: listReducer,
    completedListReducer: completedListReducer,
    newCardReducer: newCardReducer,
    changeEntranceReduser: changeEntranceReduser,
    changesCardReducer: changesCardReducer,
    registrationReducer: registrationReducer,
})
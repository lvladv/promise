import { combineReducers } from 'redux'
import {tokenReducer} from "./token/reducer"
import {listReducer} from "./list/reducer"
import {newCardReducer} from "./openNewCard/reducer"
import {changeEntranceReducer} from "./entrance/reducer"
import {changesCardReducer} from "./ChangesCard/reducer"
import {registrationReducer} from "./registration/reducer"
import {categoryListReducer} from "./category/reducer"
import {menuReducer} from "./menu/reducer"

export const rootReducer = combineReducers({
    tokenReducer: tokenReducer,
    listReducer: listReducer,
    newCardReducer: newCardReducer,
    changeEntranceReducer: changeEntranceReducer,
    changesCardReducer: changesCardReducer,
    registrationReducer: registrationReducer,
    categoryListReducer: categoryListReducer,
    menuReducer: menuReducer,
})


// import { connectRouter } from "connected-react-router";

// export const rootReducer = (history) =>
//   combineReducers({
//     router: connectRouter(history),
//     tokenReducer: tokenReducer,
//     listReducer: listReducer,
//     newCardReducer: newCardReducer,
//     changeEntranceReducer: changeEntranceReducer,
//     changesCardReducer: changesCardReducer,
//     registrationReducer: registrationReducer,
//     categoryListReducer: categoryListReducer,
//     menuReducer: menuReducer,
//   });

import {
    currentControlId,
    pageControls
} from "./reducers"

const { createStore,combineReducers } = Redux
const reducers = combineReducers({
    pageControls,
    currentControlId
})
const Store = createStore(reducers)

export default Store
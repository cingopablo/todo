import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { mainReducer } from '../pages/AppReducer'

const reducers = {
  main: mainReducer,
}

const saveToLocalStorage = state => {
  try {
    const filteredList = state.main.list.filter(el => el.text !== '')
    const storedData = JSON.stringify(filteredList)
    localStorage.setItem('todoList', storedData)
  } catch (e) {
    console.warn(e)
  }
}

const loadFromLocalStorage = () => {
  try {
    const serialisedState = localStorage.getItem('todoList')
    if (serialisedState === null) return undefined
    return JSON.parse(serialisedState)
  } catch (e) {
    return undefined
  }
}

const rootReducer = combineReducers({
  ...reducers,
})

const store = createStore(
  rootReducer,
  loadFromLocalStorage(),
  composeWithDevTools()
)

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store

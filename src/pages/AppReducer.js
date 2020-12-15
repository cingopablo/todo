import { v4 as uuidv4 } from 'uuid'
import {
  TODO_ADD,
  TODO_LOAD,
  TODO_REMOVE,
  TODO_TOGGLE,
  TODO_UPDATE,
} from './AppActions'

export const mainReducer = (
  state = {
    list: [],
  },
  action
) => {
  switch (action.type) {
    case TODO_ADD: {
      const newItem = {
        id: uuidv4(),
        text: '',
        isCompleted: false,
        isEdit: true,
      }
      const updatedItems = state.list.map(item =>
        item.isEdit ? { ...item, isEdit: false } : item
      )
      return {
        ...state,
        list: updatedItems.concat(newItem),
      }
    }
    case TODO_LOAD: {
      const { list } = action.payload
      return {
        ...state,
        list,
      }
    }
    case TODO_REMOVE: {
      const { id } = action.payload
      const updatedItems = state.list.filter(item => item.id !== id)
      return {
        ...state,
        list: updatedItems,
      }
    }
    case TODO_TOGGLE: {
      const { id } = action.payload
      const updatedItems = state.list.map(item =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
      return {
        ...state,
        list: updatedItems,
      }
    }
    case TODO_UPDATE: {
      const { id, inputText } = action.payload
      const updatedItems = state.list.map(item =>
        item.id === id ? { ...item, text: inputText } : item
      )
      return {
        ...state,
        list: updatedItems,
      }
    }
    default: {
      return state
    }
  }
}

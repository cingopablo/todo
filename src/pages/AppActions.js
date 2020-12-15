export const TODO_ADD = 'TODO_ADD'
export const TODO_LOAD = 'TODO_LOAD'
export const TODO_REMOVE = 'TODO_REMOVE'
export const TODO_TOGGLE = 'TODO_TOGGLE'
export const TODO_UPDATE = 'TODO_UPDATE'

export const actions = {
  addTODO: (dispatch, list, event) => {
    if (list.find(el => el.text === '')) return
    if (event.keyCode === 13 || event === 'click') {
      dispatch({ type: TODO_ADD })
    }
  },
  removeTODO: (setIsDeleting, dispatch, id) => {
    setIsDeleting(true)
    setTimeout(() => {
      dispatch({ type: TODO_REMOVE, payload: { id } })
    }, 250)
  },
  toggleTODO: (dispatch, id) => {
    dispatch({ type: TODO_TOGGLE, payload: { id } })
  },
  updateTODO: (dispatch, id, inputText) => {
    dispatch({
      type: TODO_UPDATE,
      payload: {
        id,
        inputText,
      },
    })
  },
}

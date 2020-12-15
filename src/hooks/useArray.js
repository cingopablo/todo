import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const useArray = initialList => {
  const [list, setList] = useState(initialList)

  return {
    list,
    addItem: newItemText => {
      setList([
        ...list,
        {
          id: uuidv4(),
          text: '',
          isCompleted: false,
          isEdit: true,
        },
      ])
    },
    updateItem: (id, textItem) => {
      const updatedItems = list.map(item =>
        item.id === id ? { ...item, text: textItem.trim() } : item
      )
      setList(updatedItems)
    },
    removeItem: itemId => {
      const updatedItems = list.filter(item => item.id !== itemId)
      setList(updatedItems)
    },
    toggleItem: itemId => {
      const updatedItems = list.map(item =>
        item.id === itemId ? { ...item, isCompleted: !item.isCompleted } : item
      )
      setList(updatedItems)
    },
    editItemOff: itemId => {
      const updatedItems = list.map(item =>
        item.id === itemId ? { ...item, isEdit: false } : item
      )
      setList(updatedItems)
    },
  }
}

export default useArray

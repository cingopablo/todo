import { useState } from 'react'

const useInput = value => {
  const [state, setState] = useState(value)

  const handleChange = event => {
    setState(event.target.value)
  }

  const reset = () => setState('')

  return [state, handleChange, reset]
}

export default useInput

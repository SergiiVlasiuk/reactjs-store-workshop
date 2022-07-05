import { useState } from 'react'

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)

  const onChange = event => {
    console.log('onChange: ', event.target.value)
    setValue(event.target.value)
  }

  const clear = () => setValue('')

  return {
    bind: { value, onChange },
    onChange,
    value,
    clear
  }
}

export default useInput
